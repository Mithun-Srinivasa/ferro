/**
 * FERRO HAUTE ATELIER // THE SALON 05 — PARIS RUNWAY CHALLENGE
 * Google Form Automated Generator Script
 * 
 * HOW TO RUN:
 * 1. Open https://script.google.com in your browser (logged into your Google account).
 * 2. Click "+ New project" at the top left.
 * 3. Delete any text currently in the editor (the default function myFunction() {}).
 * 4. Paste this entire code into the editor.
 * 5. Click the "Save" icon (or Ctrl + S), then click "Run" at the top bar.
 * 6. Grant Google permissions when prompted ("Review permissions" -> Choose account -> "Advanced" -> "Go to Untitled project (unsafe)" -> "Allow").
 * 7. In the "Execution log" at the bottom, your Public Google Form URL and Edit URL will be printed!
 */

function createFerroCompetitionForm() {
  var form = FormApp.create('FERRO // THE SALON 05 — Paris Runway Challenge');
  
  form.setDescription(
    "OFFICIAL SUBMISSION PORTAL\n" +
    "Prompt: 'Imagine you are designing 5 pieces for models of your imagination and they are going to be walking in Paris fashion week.'\n\n" +
    "• Origin: Bangalore Atelier Hiring Challenge\n" +
    "• Submission Window: 15th September 2026 – 07th October 2026 (23:59 IST)\n" +
    "• The Offer: Full-time paid atelier contract in Bangalore alongside our core 12-member team + prototype construction budget.\n" +
    "• STRICT ZERO-AI POLICY: Any Midjourney, DALL·E, Stable Diffusion, or AI-generated output results in IMMEDIATE & PERMANENT DISQUALIFICATION. Human hands, sketches, and physical toiles only."
  );
  
  form.setCollectEmail(true);
  form.setLimitOneResponsePerUser(true);
  form.setAllowResponseEdits(false);

  // ----------------------------------------------------
  // SECTION 1: CANDIDATE DOSSIER
  // ----------------------------------------------------
  form.addSectionHeaderItem()
    .setTitle('SECTION 1: CANDIDATE DOSSIER')
    .setHelpText('Identity and verified contact details for our Bangalore jury.');
    
  form.addTextItem().setTitle('1. Designer Full Name').setRequired(true);
  
  var ageItem = form.addTextItem()
    .setTitle('2. Age (< 30 years old)')
    .setHelpText('Must be under 30 to qualify for the youth atelier cohort.')
    .setRequired(true);
  var ageValidation = FormApp.createTextValidation()
    .requireNumberBetween(16, 35)
    .setHelpText('Please enter a valid age (16 to 35).')
    .build();
  ageItem.setValidation(ageValidation);

  form.addTextItem().setTitle('3. City & State (India)').setRequired(true);
  form.addTextItem().setTitle('4. Phone / WhatsApp Number').setRequired(true);
  
  form.addTextItem()
    .setTitle('5. Portfolio / Instagram / Behance Link (Optional)')
    .setHelpText('Link to your existing fashion body of work if available.')
    .setRequired(false);

  // ----------------------------------------------------
  // SECTION 2: THE 5 SILHOUETTE DIRECTIVES
  // ----------------------------------------------------
  form.addPageBreakItem()
    .setTitle('SECTION 2: THE 5 RUNWAY SILHOUETTES')
    .setHelpText('Outline your concepts for the 5 models walking your Paris fashion week presentation.');

  form.addTextItem()
    .setTitle('6. Collection Title / Concept Name')
    .setHelpText('e.g. "ARCHITECTURE OF TENSION" or "METALLIC DERMAL"')
    .setRequired(true);

  form.addParagraphTextItem()
    .setTitle('7. Look 01: The Duo Look (In Pair)')
    .setHelpText('Directive 1: Describe the 2 models interacting in tandem: volume, complementary cut, shared styling, and pacing.')
    .setRequired(true);

  form.addParagraphTextItem()
    .setTitle('8. Look 02: Postural Dynamics (Sitting Pose)')
    .setHelpText('Directive 2: Describe 1-2 seated models: structural drape, lapel angles, hem fall, and fabric compression behavior.')
    .setRequired(true);

  form.addParagraphTextItem()
    .setTitle('9. Look 03: Indian Traditional Silhouette Reimagined')
    .setHelpText('Directive 3: Reference heritage cut (angrakha, dhoti folds, sculpted pallu, sherwani structure) and how you elevated it into high fashion.')
    .setRequired(true);

  form.addParagraphTextItem()
    .setTitle('10. Look 04: Global Cultural Heritage (Non-Indian)')
    .setHelpText('Directive 4: Reference international culture (e.g. Japanese kimono deconstruction, Andean weaving volume, Agbada silhouette, Scottish kilt tailoring).')
    .setRequired(true);

  form.addParagraphTextItem()
    .setTitle('11. Look 05: The Chromatic Accent (Vibrant Color)')
    .setHelpText('Directive 5: Detail your vibrant color strategy, tonal blocking, saturation, and contrast against our monochrome baseline.')
    .setRequired(true);

  // ----------------------------------------------------
  // SECTION 3: MANDATORY 5 ACCENTS CHECKLIST
  // ----------------------------------------------------
  form.addPageBreakItem()
    .setTitle('SECTION 3: MANDATORY ACCESSORY & PATTERN ACCENTS')
    .setHelpText('Confirm that you have integrated each of the 5 required elements across your 5 sketches.');

  form.addCheckboxItem()
    .setTitle('12. Mandatory Accents Integration Checklist')
    .setHelpText('Select all 5 items to certify they appear across your collection sketches.')
    .setChoiceValues([
      'A Hat (Elevated structural / avant-garde headwear)',
      'A Bow (Architectural ribbon or tie detail)',
      'A Necklace (Sculptural collar or statement neckpiece)',
      'Patterns (Geometric diamond motif OR authentic Indian traditional pattern)',
      'Bangles (Sculpted metal, obsidian, or articulated wristwear)'
    ])
    .setRequired(true);

  form.addParagraphTextItem()
    .setTitle('13. Tactile Materials & Hardware Strategy')
    .setHelpText('Detail physical fabrics (raw silks, bonded wools, deadstock cottons) and metal or structural components.')
    .setRequired(true);

  // ----------------------------------------------------
  // SECTION 4: FILE ATTACHMENTS & ZERO-AI OATH
  // ----------------------------------------------------
  form.addPageBreakItem()
    .setTitle('SECTION 4: ARTWORK ATTACHMENTS & HUMAN OATH')
    .setHelpText('Provide your high-resolution sketch files and confirm compliance with our human-only policy.');

  form.addTextItem()
    .setTitle('14. Primary Sketch Deck / Drive Folder Link')
    .setHelpText('Paste public Google Drive, Dropbox, or Notion link containing your 5 high-res scans, photos, or digital stylus layers.')
    .setRequired(true);

  form.addCheckboxItem()
    .setTitle('15. Strict Zero-AI Human Authorship Sworn Oath')
    .setHelpText('Violation results in immediate and permanent disqualification.')
    .setChoiceValues([
      'I formalize and certify that 100% of my sketches, silhouettes, and concept texts were created by human hands (pencil, ink, markers, physical fabric drapes, or digital stylus illustrations). ZERO generative AI tools (Midjourney, DALL·E, Stable Diffusion, or synthetic upscalers) were used.'
    ])
    .setRequired(true);

  form.addTextItem()
    .setTitle('16. Digital Signature')
    .setHelpText('Type your full legal name as your electronic signature.')
    .setRequired(true);

  var editUrl = form.getEditUrl();
  var publishedUrl = form.getPublishedUrl();

  Logger.log('==================================================');
  Logger.log('SUCCESS! FERRO COMPETITION FORM HAS BEEN CREATED:');
  Logger.log('EDIT URL (To customize): ' + editUrl);
  Logger.log('PUBLIC SUBMISSION URL (For website): ' + publishedUrl);
  Logger.log('==================================================');
}
