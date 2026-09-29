from pathlib import Path
from io import BytesIO
from reportlab.pdfgen import canvas
from reportlab.pdfbase import pdfmetrics
from reportlab.pdfbase.ttfonts import TTFont
from pypdf import PdfReader, PdfWriter

ROOT = Path(__file__).resolve().parents[1]
PDF_DIR = ROOT / "public" / "methodology"
FONT = "/usr/share/fonts/truetype/dejavu/DejaVuSans.ttf"
FONT_B = "/usr/share/fonts/truetype/dejavu/DejaVuSans-Bold.ttf"

pdfmetrics.registerFont(TTFont("MethodSans", FONT))
pdfmetrics.registerFont(TTFont("MethodSansB", FONT_B))

ITEMS = {
    "RU": {
        "file": "CheckOpp_Methodology_Public_Summary_RU_v1.0_September_2026.pdf",
        "line1": "Методология является авторской разработкой Александра Корецкого.",
        "line2": "CheckOpp — её программная реализация и рабочая среда применения.",
        "footer": "© Oleksandr Koretskiy, 2026 · Авторская / proprietary methodology",
    },
    "EN": {
        "file": "CheckOpp_Methodology_Public_Summary_EN_v1.0_September_2026.pdf",
        "line1": "The methodology is an original proprietary methodology developed by Oleksandr Koretskiy.",
        "line2": "CheckOpp is its software implementation and operational environment.",
        "footer": "© Oleksandr Koretskiy, 2026 · Author methodology / proprietary methodology",
    },
    "UA": {
        "file": "CheckOpp_Methodology_Public_Summary_UA_v1.0_September_2026.pdf",
        "line1": "Методологія є авторською розробкою Олександра Корецького.",
        "line2": "CheckOpp — її програмна реалізація та робоче середовище застосування.",
        "footer": "© Oleksandr Koretskiy, 2026 · Авторська / proprietary methodology",
    },
    "SR": {
        "file": "CheckOpp_Methodology_Public_Summary_SR_v1.0_September_2026.pdf",
        "line1": "Metodologija je autorski razvijena od strane Oleksandra Koretskog.",
        "line2": "CheckOpp je njena softverska realizacija i radno okruženje za primenu.",
        "footer": "© Oleksandr Koretskiy, 2026 · Autorska / proprietary methodology",
    },
}

def make_overlay(width, height, first_page, info):
    buffer = BytesIO()
    layer = canvas.Canvas(buffer, pagesize=(width, height))
    if first_page:
        layer.setFillColorRGB(0.16, 0.29, 0.39)
        layer.setFont("MethodSansB", 9.2)
        layer.drawCentredString(width / 2, 490, info["line1"])
        layer.setFont("MethodSans", 9.2)
        layer.drawCentredString(width / 2, 474, info["line2"])
    layer.setFillColorRGB(0.39, 0.43, 0.47)
    layer.setFont("MethodSans", 7.2)
    layer.drawCentredString(width / 2, 12, info["footer"])
    layer.save()
    buffer.seek(0)
    return PdfReader(buffer).pages[0]

for lang, info in ITEMS.items():
    path = PDF_DIR / info["file"]
    reader = PdfReader(str(path))
    writer = PdfWriter()
    for index, page in enumerate(reader.pages):
        width = float(page.mediabox.width)
        height = float(page.mediabox.height)
        page.merge_page(make_overlay(width, height, index == 0, info))
        writer.add_page(page)
    if reader.metadata:
        writer.add_metadata({k: str(v) for k, v in reader.metadata.items() if v is not None})
    tmp = path.with_suffix(".tmp.pdf")
    with tmp.open("wb") as output:
        writer.write(output)
    tmp.replace(path)
    print(f"{lang}: updated {path.name} ({len(reader.pages)} pages)")
