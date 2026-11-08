# 📱 Mobile app — Person 4

**Goal:** the phone app owners use. Colourful, minimal, icons over numbers. Details only when they tap "See more."

Built with **Expo (React Native + TypeScript)**.

## First-time setup

```bash
cd mobile
npx create-expo-app@latest . --template default
# keep the provided app/index.tsx when it asks to overwrite (or copy it back after)
cp .env.example .env
npx expo start --tunnel
```

Install **Expo Go** on your phone and scan the QR code. Every save reloads the app instantly.

## Screens

| File | Screen |
|---|---|
| `app/index.tsx` | **Home:** status card, 4 icon tiles, "See more" (starter already written) |
| `app/cats.tsx` | Switch between cats (Mochi, Luna, Tiger, Oscar) |
| `app/report.tsx` | Vet report: level, what changed, last 14 days, share button |

## Design rules

- **Default view:** cat name, one big coloured status, one sentence, four tiles. No numbers.
- **Colours = meaning:** green fine, blue watching, amber vet visit, red call now. Same colours as `LEVELS` in `index.tsx`.
- **Icons:** `MaterialCommunityIcons` from `@expo/vector-icons` (already included with Expo).
- **Details:** three short cards only after "See more": what changed, could be nothing, call your vet if.

## Day 1: mock data

`app/index.tsx` already uses a mock `cat` object. Build every screen against mock data first. Test all four states by changing `level` to `good`, `blip`, `vet`, `urgent`.

## Day 2: real data

Create `lib/api.ts`:

```ts
const API = process.env.EXPO_PUBLIC_API_URL;

export async function getStatus(catId: string) {
  const res = await fetch(`${API}/cats/${catId}/status`);
  if (!res.ok) throw new Error("Couldn't reach Purrcast");
  return res.json();
}
```

The response shape is in `docs/CONTRACT.md` section 5. Map each tile's `key` to an icon: `water` → `water`, `food` → `silverware-fork-knife`, `litter` → `toilet`, `weight` → `scale-bathroom`.

If the API fails, fall back to mock data so the demo never breaks.

## Stretch

- Push notification when a cat turns `vet` or `urgent` (`expo-notifications`)
- Small trend chart in "See more" from `/history`

## Done when

- [ ] Home screen looks right in all four states
- [ ] Can switch between the 4 demo cats
- [ ] Loads live data from the backend
- [ ] Vet report screen works
- [ ] Tested on a real phone
