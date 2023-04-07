import cv2
from pprint import pprint
from segment_anything import sam_model_registry, SamAutomaticMaskGenerator, SamPredictor

print("Loading SAM model...")
sam = sam_model_registry["vit_b"](checkpoint=r"D:\sam_vit_b_01ec64.pth")
sam.to("cuda")

print("Initializing SAM mask generator...")
mask_generator = SamAutomaticMaskGenerator(sam)

print("Loading sample image...")
image = cv2.imread(r"D:\invoke\outputs\000141.f1c4296c.1983282612.png")

masks = mask_generator.generate(image)

pprint(masks);

# TASK: we would like to sort the masks based not on the area,
# but by weighing each pixel based on how far it is from the center of the image.
# pixels close to the center should be worth a lot more.

def rank_mask(mask: dict):
    return mask["area"] * mask["predicted_iou"] ** 2

mask = masks[0]["segmentation"] * 255

for mask in masks[0:5]:
    pass

def rank_mask(mask: dict):
    return mask["area"] * mask["predicted_iou"] ** 2
masks.sort(key=rank_mask, reverse=True)

masked_image = cv2.cvtColor(image, cv2.COLOR_BGR2BGRA)
masked_image[:, :, 3] = mask

cv2.imwrite("test.png", masked_image)
