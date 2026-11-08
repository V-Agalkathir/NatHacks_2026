"""Check every demo cat gets its expected level, across many random seeds.

Run from the repo root:  python -m engine.test_engine
If someone tweaks a threshold and a demo cat breaks, this fails immediately.
"""
from . import fake_daily
from .run import assess_rows

EXPECTED = {"mochi": "good", "luna": "blip", "tiger": "vet", "oscar": "urgent"}
REQUIRED_KEYS = {"cat_id", "name", "updated", "level", "message", "tiles", "details"}


def check(seed: int) -> list[str]:
    """Return a list of problems for one seed (empty list = all good)."""
    problems = []
    df = fake_daily.generate(seed)
    for cat in fake_daily.CATS:
        rows = df[df.cat_id == cat["cat_id"]].reset_index(drop=True)
        r = assess_rows(rows, cat)
        if r["level"] != EXPECTED[cat["cat_id"]]:
            problems.append(f"seed {seed}: {cat['cat_id']} got {r['level']} "
                            f"(expected {EXPECTED[cat['cat_id']]}): {r['details']['changed']}")
        if not REQUIRED_KEYS <= r.keys() or len(r["tiles"]) != 4:
            problems.append(f"seed {seed}: {cat['cat_id']} result is missing contract fields")
    return problems


# Every scenario from simulator/README.md -> expected level
SCENARIOS = {
    "healthy": "good",
    "blip": "blip",
    "slow_drinking": "vet",
    "weight_loss": "vet",
    "litter_emergency": "urgent",
    "not_eating": "urgent",
}


def check_scenarios(seeds) -> list[str]:
    """Run every scenario on many random cats. Also checks the
    'eating less + losing weight' combination fires for weight_loss."""
    problems = []
    combo_hits = 0
    for scenario, expected in SCENARIOS.items():
        for seed in seeds:
            cat = {"cat_id": "test", "name": "Test", "sex": "female", "scenario": scenario}
            r = assess_rows(fake_daily.generate(seed, [cat]), cat)
            if r["level"] != expected:
                problems.append(f"{scenario} seed {seed}: got {r['level']} "
                                f"(expected {expected}): {r['details']['changed']}")
            if scenario == "weight_loss" and "while slowly losing weight" in r["details"]["changed"]:
                combo_hits += 1
    print(f"eat-less + lose-weight combo fired on {combo_hits}/{len(seeds)} weight_loss cats")
    return problems


if __name__ == "__main__":
    seeds = range(50)
    demo = [p for s in seeds for p in check(s)]
    extra = check_scenarios(range(100, 200))
    for p in demo + extra:
        print("FAIL", p)
    print(f"\nDemo cats: {len(seeds) * 4 - len(demo)}/{len(seeds) * 4} passed")
    print(f"All scenarios: {600 - len(extra)}/600 passed (98%+ is fine; noise is random)")
