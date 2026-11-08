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


if __name__ == "__main__":
    seeds = range(50)
    all_problems = [p for s in seeds for p in check(s)]
    for p in all_problems:
        print("FAIL", p)
    print(f"\n{len(seeds) * 4 - len(all_problems)}/{len(seeds) * 4} checks passed")
