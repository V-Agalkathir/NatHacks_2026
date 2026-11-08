# 📷 Vision — Person 1

**Goal:** a live demo showing where the data would come from: detect the cat on video, and log when it visits the litter box, food bowl, and water bowl.

This is a separate demo; the app doesn't depend on it.

## Files to build

| File | Does |
|---|---|
| `detect.py` | Runs YOLO on a video or webcam, draws boxes around the cat |
| `zones.py` | Rectangles for litter / food / water; logs enter/leave events |
| `train.py` (optional) | Fine-tunes YOLO on the CAT BEHAVIOR dataset for eating vs drinking |

## Step 1: detect cats (no training)

The pretrained `yolov8n.pt` already knows "cat" (COCO class 15). Start here:

```bash
source ../.venv/bin/activate
python detect.py --source samples/cat.mp4
```

## Step 2: zones

Define zones in pixels for your video in `zones.py`:

```python
ZONES = {
    "litter": (50, 300, 250, 450),   # x1, y1, x2, y2
    "food":   (300, 320, 420, 420),
    "water":  (450, 320, 570, 420),
}
```

When the cat box's centre is inside a zone for `MIN_VISIT_SEC`, log a visit. Print events like:

```
14:02:11  water   visit 18s
14:05:40  litter  visit 72s
```

## Step 3 (stretch): eating vs drinking

Download the **CAT BEHAVIOR** dataset from Roboflow Universe (CC BY 4.0) in YOLOv8 format. Put your key in `.env`, then fine-tune:

```bash
yolo train model=yolov8n.pt data=<dataset>/data.yaml epochs=30 imgsz=640
```

Save the best weights to `models/` (don't commit large files).

## WSL note

Webcams usually don't work inside WSL. Use a recorded video in `samples/` (film a friend's cat with a phone). If you need the live webcam, run `detect.py` from Windows Python instead.

## Demo plan

Show a video of a cat walking to its bowls and litter box, with zones lighting up and events appearing. Then say: "Each of these visits becomes a data point for the app."

## Done when

- [ ] Cat detected with a box on the sample video
- [ ] Zones drawn on screen; they highlight when the cat is inside
- [ ] Visit events printed or saved to `events.csv`
