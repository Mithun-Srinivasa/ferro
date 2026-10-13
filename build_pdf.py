import os
import re
from fpdf import FPDF

class FerroDossierPDF(FPDF):
    def __init__(self):
        super().__init__(orientation="P", unit="mm", format="A4")
        self.set_auto_page_break(auto=True, margin=20)
        
        # Load system fonts with full Unicode support
        self.add_font("Arial", "", "C:/Windows/Fonts/arial.ttf")
        self.add_font("Arial", "B", "C:/Windows/Fonts/arialbd.ttf")
        self.add_font("Arial", "I", "C:/Windows/Fonts/ariali.ttf")
        
    def header(self):
        if self.page_no() > 1:
            self.set_font("Arial", "B", 8)
            self.set_text_color(120, 120, 120)
            self.cell(0, 6, "FERRO ATELIER // SALON 05 CANDIDATE DOSSIER #0847 - ONLINE INTERVIEW", align="L")
            self.set_x(15)
            self.set_font("Arial", "", 8)
            self.cell(180, 6, "CONFIDENTIAL", align="R")
            self.ln(6)
            self.set_draw_color(220, 220, 220)
            self.set_line_width(0.3)
            self.line(15, 14, 195, 14)
            self.ln(3)

    def footer(self):
        self.set_y(-15)
        self.set_draw_color(220, 220, 220)
        self.set_line_width(0.3)
        self.line(15, 282, 195, 282)
        self.set_font("Arial", "", 8)
        self.set_text_color(140, 140, 140)
        self.cell(90, 8, "INTERNAL HIRING PANEL ONLY | ZERO EXTERNAL DISTRIBUTION", align="L")
        self.cell(90, 8, f"PAGE {self.page_no()} OF {{nb}}", align="R")

def clean_text(text):
    # Normalize common Unicode characters to avoid font issues
    replacements = {
        "—": " - ",
        "–": " - ",
        "“": '"',
        "”": '"',
        "‘": "'",
        "’": "'",
        "…": "...",
        "•": "*",
        "→": "->",
        "↗": "->",
        "°": " deg ",
        "\\*": "*",
    }
    for k, v in replacements.items():
        text = text.replace(k, v)
    return text

def generate_pdf():
    input_md_path = r"C:\Users\mithu\.gemini\antigravity\brain\3b6f0f4c-9be7-4967-8d74-857de3e4ebd6\ferro_interview_transcript_anjali.md"
    output_pdf_path = r"C:\Users\mithu\Downloads\FERRO_Interview_Transcript_Anjali.pdf"
    workspace_pdf_path = r"C:\FXD1\FERRO_Interview_Transcript_Anjali.pdf"

    with open(input_md_path, "r", encoding="utf-8") as f:
        content = f.read()

    pdf = FerroDossierPDF()
    pdf.alias_nb_pages()
    pdf.set_margins(15, 16, 15)
    pdf.add_page()

    # COVER HEADER BLOCK
    pdf.set_fill_color(15, 15, 18)  # Deep atelier noir
    pdf.rect(15, 16, 180, 28, "F")
    
    # Vermilion accent top line
    pdf.set_fill_color(255, 51, 0)
    pdf.rect(15, 16, 180, 1.8, "F")

    pdf.set_xy(20, 21)
    pdf.set_font("Arial", "B", 15)
    pdf.set_text_color(255, 255, 255)
    pdf.cell(170, 7, "FERRO  //  HAUTE ATELIER BENGALURU", 0, 1, "L")
    
    pdf.set_xy(20, 28)
    pdf.set_font("Arial", "B", 10)
    pdf.set_text_color(255, 51, 0)
    pdf.cell(170, 6, "SALON 05 FINALIST EVALUATION - OFFICIAL SIMULATION TRANSCRIPT", 0, 1, "L")
    
    pdf.set_xy(20, 34)
    pdf.set_font("Arial", "", 8)
    pdf.set_text_color(180, 180, 185)
    pdf.cell(170, 5, "CANDIDATE: ANJALI KRISHNAMURTHY  |  DOSSIER #0847  |  DATE: 15 OCT 2026", 0, 1, "L")

    pdf.set_y(49)

    # METADATA SUMMARY TABLE
    meta_items = [
        ("Platform", "Google Meet (Video Conference Sync)"),
        ("Session Duration", "1 Hour 58 Minutes (09:02 - 11:00 IST)"),
        ("Evaluation Panel", "Mithun S. (Creative Dir), Rhea Kapoor (Design), Arjun Desai (Ops)"),
        ("Candidate Profile", "Age 23 - Self-taught & Apprentice - 5 Submitted Silhouettes"),
        ("Security Clearance", "INTERNAL ONLY - Salon 05 Jury & Executive Panel"),
    ]

    pdf.set_fill_color(248, 248, 250)
    pdf.set_draw_color(225, 225, 230)
    pdf.set_line_width(0.2)
    
    for label, val in meta_items:
        pdf.set_font("Arial", "B", 8)
        pdf.set_text_color(90, 90, 100)
        pdf.cell(38, 6.2, f"  {label.upper()}:", border=1, fill=True)
        pdf.set_font("Arial", "", 8.5)
        pdf.set_text_color(30, 30, 35)
        pdf.cell(142, 6.2, f"  {val}", border=1, ln=1)

    pdf.ln(5)

    # PROCESS CONTENT
    lines = content.split("\n")
    in_dialogue = False
    skip_header = True

    speaker_colors = {
        "Mithun": (20, 20, 25),
        "Anjali": (180, 35, 0),     # Dark vermilion / rust accent
        "Rhea": (35, 75, 130),      # Slate indigo
        "Arjun": (50, 110, 80),     # Atelier forest green
    }

    for line in lines:
        raw_line = clean_text(line.strip())

        if not raw_line:
            pdf.ln(2)
            continue

        # Skip raw markdown metadata at top since we drew the banner
        if raw_line.startswith("# ") or raw_line.startswith("**Classification**") or \
           raw_line.startswith("**Interview Date**") or raw_line.startswith("**Location**") or \
           raw_line.startswith("**Duration**") or raw_line.startswith("**Candidate**") or \
           raw_line.startswith("**Panel**") or raw_line.startswith("- **") or \
           raw_line.startswith("**Recording Reference**") or raw_line.startswith("**Transcription**"):
            continue

        if raw_line == "---":
            pdf.ln(2)
            pdf.set_draw_color(230, 230, 235)
            pdf.line(15, pdf.get_y(), 195, pdf.get_y())
            pdf.ln(3)
            continue

        # SECTION / PART HEADERS
        if raw_line.startswith("## PART") or raw_line.startswith("## POST-INTERVIEW"):
            pdf.ln(4)
            # Ensure section heading doesn't dangle at bottom of page
            if pdf.get_y() > 245:
                pdf.add_page()

            pdf.set_fill_color(240, 242, 245)
            pdf.set_draw_color(200, 205, 215)
            pdf.rect(15, pdf.get_y(), 180, 8.5, "DF")
            
            # Left vermilion pip
            pdf.set_fill_color(255, 51, 0)
            pdf.rect(15, pdf.get_y(), 2.5, 8.5, "F")

            pdf.set_xy(20, pdf.get_y() + 1.2)
            pdf.set_font("Arial", "B", 10.5)
            pdf.set_text_color(15, 15, 20)
            pdf.cell(170, 6, raw_line.replace("## ", "").upper(), 0, 1)
            pdf.ln(3)
            continue

        # Timestamp badges like [ 09:02 - 09:18 ]
        if raw_line.startswith("**[") and raw_line.endswith("]**"):
            pdf.set_font("Arial", "I", 8)
            pdf.set_text_color(120, 120, 130)
            pdf.cell(0, 4.5, f"TIMECODE WINDOW: {raw_line.replace('**', '')}", ln=1)
            pdf.ln(2)
            continue

        # Call ends / Recording ends
        if raw_line.startswith("**[ CALL ENDS") or raw_line.startswith("**[ RECORDING ENDS"):
            pdf.ln(3)
            pdf.set_fill_color(20, 20, 25)
            pdf.rect(15, pdf.get_y(), 180, 7, "F")
            pdf.set_font("Arial", "B", 8.5)
            pdf.set_text_color(255, 255, 255)
            pdf.set_xy(15, pdf.get_y() + 1)
            pdf.cell(180, 5, raw_line.replace("**", ""), align="C", ln=1)
            pdf.ln(4)
            continue

        # Recommendation / Post interview notes headers
        if raw_line.startswith("### "):
            pdf.ln(3)
            if pdf.get_y() > 250:
                pdf.add_page()
            name_header = raw_line.replace("### ", "")
            pdf.set_font("Arial", "B", 9.5)
            pdf.set_text_color(20, 20, 25)
            pdf.cell(0, 5.5, name_header, ln=1)
            continue

        if raw_line.startswith("**Recommendation**:"):
            pdf.set_font("Arial", "B", 9)
            pdf.set_text_color(0, 130, 60) # Green for hire
            pdf.cell(0, 5, f"  {raw_line.replace('**', '')}", ln=1)
            pdf.ln(1)
            continue

        if raw_line.startswith("> "):
            pdf.set_font("Arial", "I", 8.5)
            pdf.set_text_color(100, 100, 110)
            pdf.multi_cell(180, 4.8, f"  {raw_line.replace('> ', '').replace('**', '')}")
            pdf.ln(2)
            continue

        # DIALOGUE SPEAKER LINES
        # Match pattern: **Speaker**: rest of text
        speaker_match = re.match(r"^\*\*([A-Za-z]+)\*\*:\s*(.*)", raw_line)
        if speaker_match:
            speaker = speaker_match.group(1)
            speech = speaker_match.group(2)

            color = speaker_colors.get(speaker, (30, 30, 30))

            if pdf.get_y() > 255:
                pdf.add_page()

            # Speaker Name Tag
            pdf.set_font("Arial", "B", 9)
            pdf.set_text_color(*color)
            pdf.cell(24, 5, f"{speaker}:", 0, 0, "L")

            # Dialogue text with inline formatting
            pdf.set_font("Arial", "", 9)
            pdf.set_text_color(40, 40, 45)

            # Check if there is stage direction at beginning
            clean_speech = speech.replace("**", "")
            
            # Print first line and wrapped multi_cell
            # Using multi_cell with margin indent
            pdf.set_x(38)
            pdf.multi_cell(157, 4.8, clean_speech)
            pdf.ln(2.2)
            continue

        # General paragraphs (continuation of speech or general text)
        pdf.set_font("Arial", "", 9)
        pdf.set_text_color(40, 40, 45)
        clean_p = raw_line.replace("**", "").replace("*", "")
        pdf.set_x(38)
        pdf.multi_cell(157, 4.8, clean_p)
        pdf.ln(2)

    # Save to both target locations
    os.makedirs(os.path.dirname(output_pdf_path), exist_ok=True)
    pdf.output(output_pdf_path)
    pdf.output(workspace_pdf_path)
    print(f"SUCCESS: Generated PDF at {output_pdf_path} and {workspace_pdf_path}")
    print(f"Total Pages: {pdf.page_no()}")

if __name__ == "__main__":
    generate_pdf()
