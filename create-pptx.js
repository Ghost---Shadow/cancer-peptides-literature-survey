const pptxgen = require("pptxgenjs");
const path = require("path");

const pres = new pptxgen();
pres.layout = "LAYOUT_16x9";
pres.author = "Cancer Peptides Literature Survey";
pres.title = "Cancer-Targeting Peptides for Lung Cancer (2014-2025)";

// Color palette — Ocean Gradient + scientific
const C = {
  darkBg: "0A1628",      // very dark navy for title slides
  midBg: "0F2240",       // dark navy for section intros
  deepBlue: "065A82",    // primary
  teal: "1C7293",        // secondary
  midnight: "21295C",    // accent dark
  white: "FFFFFF",
  offWhite: "F0F4F8",
  lightGray: "E2E8F0",
  medGray: "94A3B8",
  darkText: "1E293B",
  accent: "0EA5E9",      // sky blue accent
  accentGreen: "10B981",
  accentAmber: "F59E0B",
  accentRed: "EF4444",
  accentPurple: "8B5CF6",
};

const IMG = path.join(__dirname, "papers", "images");

// Helper: fresh shadow
const cardShadow = () => ({ type: "outer", blur: 6, offset: 2, angle: 135, color: "000000", opacity: 0.12 });

// ========== SLIDE 1: TITLE ==========
{
  const s = pres.addSlide();
  s.background = { color: C.darkBg };
  // Top accent bar
  s.addShape(pres.shapes.RECTANGLE, { x: 0, y: 0, w: 10, h: 0.06, fill: { color: C.accent } });
  // Title
  s.addText("Cancer-Targeting Peptides\nfor Lung Cancer", {
    x: 0.8, y: 1.0, w: 8.4, h: 2.2,
    fontSize: 40, fontFace: "Georgia", color: C.white, bold: true,
    lineSpacingMultiple: 1.2, margin: 0,
  });
  // Subtitle
  s.addText("A Literature Survey of 19 Papers (2014–2025)", {
    x: 0.8, y: 3.2, w: 8.4, h: 0.6,
    fontSize: 20, fontFace: "Calibri", color: C.accent, margin: 0,
  });
  // Divider line
  s.addShape(pres.shapes.LINE, { x: 0.8, y: 4.0, w: 3, h: 0, line: { color: C.teal, width: 2 } });
  // Bottom info
  s.addText("Peptide Discovery  |  Anticancer Activity  |  Drug Conjugates  |  Nanoparticles  |  AI Design", {
    x: 0.8, y: 4.3, w: 8.4, h: 0.5,
    fontSize: 12, fontFace: "Calibri", color: C.medGray, margin: 0,
  });
  s.addNotes("Good morning/afternoon. Today I'll be presenting a literature survey on cancer-targeting peptides for lung cancer — spanning a decade of research from 2014 to 2025. This survey covers 19 papers across the full spectrum: from peptide discovery and direct anticancer activity, through drug conjugates and nanoparticle delivery, all the way to the latest AI-driven design approaches.");
}

// ========== SLIDE 2: CONTENTS ==========
{
  const s = pres.addSlide();
  s.background = { color: C.offWhite };
  s.addText("Contents", {
    x: 0.8, y: 0.4, w: 8.4, h: 0.7,
    fontSize: 32, fontFace: "Georgia", color: C.darkText, bold: true, margin: 0,
  });
  s.addShape(pres.shapes.LINE, { x: 0.8, y: 1.15, w: 2, h: 0, line: { color: C.accent, width: 2 } });

  const sections = [
    { num: "01", title: "Peptide Discovery and Targeting", papers: "6 papers" },
    { num: "02", title: "Anticancer Peptides with Direct Activity", papers: "2 papers" },
    { num: "03", title: "Peptide-Drug Conjugates and Delivery", papers: "2 papers" },
    { num: "04", title: "Nanoparticles and Delivery Platforms", papers: "2 papers" },
    { num: "05", title: "Computational and AI-Driven Design", papers: "2 papers" },
    { num: "06", title: "Reviews and Landscape Papers", papers: "5 papers" },
    { num: "07", title: "Cross-Cutting Analysis", papers: "Synthesis" },
  ];

  sections.forEach((sec, i) => {
    const yBase = 1.5 + i * 0.55;
    s.addText(sec.num, {
      x: 0.8, y: yBase, w: 0.6, h: 0.45,
      fontSize: 16, fontFace: "Calibri", color: C.accent, bold: true, margin: 0,
    });
    s.addText(sec.title, {
      x: 1.5, y: yBase, w: 6, h: 0.45,
      fontSize: 16, fontFace: "Calibri", color: C.darkText, margin: 0,
    });
    s.addText(sec.papers, {
      x: 7.8, y: yBase, w: 1.5, h: 0.45,
      fontSize: 12, fontFace: "Calibri", color: C.medGray, align: "right", margin: 0,
    });
  });
  s.addNotes("Here's the roadmap. We'll move through seven sections. We start with how peptides are discovered and engineered to target lung cancer cells. Then we look at peptides that kill cancer directly. Next, peptide-drug conjugates. Then nanoparticle platforms. After that, the computational and AI side. We'll cover the major review papers, and finally, a cross-cutting analysis tying everything together.");
}

// Helper: Section intro slide
function addSectionSlide(num, title, subtitle, notes) {
  const s = pres.addSlide();
  s.background = { color: C.midBg };
  s.addShape(pres.shapes.RECTANGLE, { x: 0, y: 0, w: 0.12, h: 5.625, fill: { color: C.accent } });
  s.addText(`Section ${num}`, {
    x: 0.8, y: 1.4, w: 8.4, h: 0.5,
    fontSize: 14, fontFace: "Calibri", color: C.accent, charSpacing: 4, margin: 0,
  });
  s.addText(title, {
    x: 0.8, y: 1.9, w: 8.4, h: 1.2,
    fontSize: 36, fontFace: "Georgia", color: C.white, bold: true, margin: 0,
  });
  s.addShape(pres.shapes.LINE, { x: 0.8, y: 3.3, w: 2.5, h: 0, line: { color: C.teal, width: 2 } });
  s.addText(subtitle, {
    x: 0.8, y: 3.6, w: 8, h: 0.8,
    fontSize: 14, fontFace: "Calibri", color: C.medGray, margin: 0,
  });
  s.addNotes(notes);
}

// Helper: Paper slide with image on right
function addPaperSlideWithImage(author, year, title, bullets, imgFile, imgCaption, notes) {
  const s = pres.addSlide();
  s.background = { color: C.offWhite };
  // Header bar
  s.addShape(pres.shapes.RECTANGLE, { x: 0, y: 0, w: 10, h: 0.06, fill: { color: C.accent } });
  // Author + year badge
  s.addText(`${author} (${year})`, {
    x: 0.6, y: 0.25, w: 3, h: 0.4,
    fontSize: 12, fontFace: "Calibri", color: C.teal, bold: true, margin: 0,
  });
  // Title
  s.addText(title, {
    x: 0.6, y: 0.6, w: 5.4, h: 0.6,
    fontSize: 18, fontFace: "Georgia", color: C.darkText, bold: true, margin: 0,
  });
  // Bullet points
  const bulletItems = bullets.map((b, i) => ({
    text: b,
    options: { bullet: true, breakLine: i < bullets.length - 1, fontSize: 12, fontFace: "Calibri", color: C.darkText },
  }));
  s.addText(bulletItems, {
    x: 0.6, y: 1.35, w: 5.4, h: 3.0,
    paraSpaceAfter: 6, valign: "top", margin: 0,
  });
  // Image
  if (imgFile) {
    s.addShape(pres.shapes.RECTANGLE, {
      x: 6.2, y: 0.8, w: 3.5, h: 3.2,
      fill: { color: C.white }, shadow: cardShadow(),
    });
    s.addImage({
      path: path.join(IMG, imgFile),
      x: 6.35, y: 0.95, w: 3.2, h: 2.6,
      sizing: { type: "contain", w: 3.2, h: 2.6 },
    });
    if (imgCaption) {
      s.addText(imgCaption, {
        x: 6.2, y: 3.65, w: 3.5, h: 0.35,
        fontSize: 8, fontFace: "Calibri", color: C.medGray, align: "center", margin: 0,
      });
    }
  }
  // Footer
  s.addShape(pres.shapes.RECTANGLE, { x: 0, y: 5.325, w: 10, h: 0.3, fill: { color: C.darkBg } });
  s.addText(`${author} et al. (${year})`, {
    x: 0.6, y: 5.325, w: 4, h: 0.3,
    fontSize: 8, fontFace: "Calibri", color: C.medGray, margin: 0, valign: "middle",
  });
  s.addNotes(notes);
}

// Helper: Paper slide with two images
function addPaperSlide2Images(author, year, title, bullets, img1, cap1, img2, cap2, notes) {
  const s = pres.addSlide();
  s.background = { color: C.offWhite };
  s.addShape(pres.shapes.RECTANGLE, { x: 0, y: 0, w: 10, h: 0.06, fill: { color: C.accent } });
  s.addText(`${author} (${year})`, {
    x: 0.6, y: 0.25, w: 3, h: 0.4,
    fontSize: 12, fontFace: "Calibri", color: C.teal, bold: true, margin: 0,
  });
  s.addText(title, {
    x: 0.6, y: 0.6, w: 8.8, h: 0.5,
    fontSize: 18, fontFace: "Georgia", color: C.darkText, bold: true, margin: 0,
  });
  // Bullets (full width, shorter)
  const bulletItems = bullets.map((b, i) => ({
    text: b,
    options: { bullet: true, breakLine: i < bullets.length - 1, fontSize: 12, fontFace: "Calibri", color: C.darkText },
  }));
  s.addText(bulletItems, {
    x: 0.6, y: 1.2, w: 8.8, h: 1.5,
    paraSpaceAfter: 4, valign: "top", margin: 0,
  });
  // Two images side by side
  [{ img: img1, cap: cap1, xOff: 0.6 }, { img: img2, cap: cap2, xOff: 5.2 }].forEach(({ img, cap, xOff }) => {
    s.addShape(pres.shapes.RECTANGLE, {
      x: xOff, y: 2.8, w: 4.2, h: 2.2,
      fill: { color: C.white }, shadow: cardShadow(),
    });
    s.addImage({
      path: path.join(IMG, img),
      x: xOff + 0.1, y: 2.9, w: 4.0, h: 1.7,
      sizing: { type: "contain", w: 4.0, h: 1.7 },
    });
    s.addText(cap, {
      x: xOff, y: 4.7, w: 4.2, h: 0.3,
      fontSize: 8, fontFace: "Calibri", color: C.medGray, align: "center", margin: 0,
    });
  });
  // Footer
  s.addShape(pres.shapes.RECTANGLE, { x: 0, y: 5.325, w: 10, h: 0.3, fill: { color: C.darkBg } });
  s.addText(`${author} et al. (${year})`, {
    x: 0.6, y: 5.325, w: 4, h: 0.3,
    fontSize: 8, fontFace: "Calibri", color: C.medGray, margin: 0, valign: "middle",
  });
  s.addNotes(notes);
}

// Helper: Paper slide text only (no image)
function addPaperSlideTextOnly(author, year, title, bullets, notes) {
  const s = pres.addSlide();
  s.background = { color: C.offWhite };
  s.addShape(pres.shapes.RECTANGLE, { x: 0, y: 0, w: 10, h: 0.06, fill: { color: C.accent } });
  s.addText(`${author} (${year})`, {
    x: 0.6, y: 0.25, w: 3, h: 0.4,
    fontSize: 12, fontFace: "Calibri", color: C.teal, bold: true, margin: 0,
  });
  s.addText(title, {
    x: 0.6, y: 0.6, w: 8.8, h: 0.6,
    fontSize: 18, fontFace: "Georgia", color: C.darkText, bold: true, margin: 0,
  });
  const bulletItems = bullets.map((b, i) => ({
    text: b,
    options: { bullet: true, breakLine: i < bullets.length - 1, fontSize: 13, fontFace: "Calibri", color: C.darkText },
  }));
  s.addText(bulletItems, {
    x: 0.6, y: 1.4, w: 8.8, h: 3.5,
    paraSpaceAfter: 8, valign: "top", margin: 0,
  });
  s.addShape(pres.shapes.RECTANGLE, { x: 0, y: 5.325, w: 10, h: 0.3, fill: { color: C.darkBg } });
  s.addText(`${author} et al. (${year})`, {
    x: 0.6, y: 5.325, w: 4, h: 0.3,
    fontSize: 8, fontFace: "Calibri", color: C.medGray, margin: 0, valign: "middle",
  });
  s.addNotes(notes);
}

// ========== SLIDE 3: Section 1 Intro ==========
addSectionSlide("1", "Peptide Discovery\nand Targeting", "How do we find peptides that specifically recognize and bind to lung cancer cells?\nThe primary workhorse: phage display biopanning.", "Let's start with the foundation — how do we find peptides that specifically recognize and bind to lung cancer cells? The primary workhorse here has been phage display biopanning, a technique where billions of random peptide sequences are screened against live cancer cells to identify the best binders.");

// ========== SLIDE 4: McGuire 2014 ==========
addPaperSlideWithImage("McGuire", "2014",
  "Tumor Targeting Peptides for NSCLC",
  [
    "Phage display: 3 libraries (7-mer, 12-mer, C7C) screened on live NSCLC cells",
    "11 novel peptides identified with distinct binding profiles across 40 cell lines",
    "Tetramer KD values as tight as 0.0071 nM (7 picomolar)",
    "Binding correlates with EGFR and KRAS genotype",
    "In vivo tumor homing confirmed in xenograft; validated on patient samples",
    "Foundation paper — same group optimized MGS4 a decade later (Allred 2023)",
  ],
  "mcguire-2014-fig1-binding.jpg",
  "Fig 1: Binding profiles across 40-cell-line panel",
  "The story starts in 2014 with McGuire and colleagues at SRI International. They screened three phage display libraries against live NSCLC cells. Out of this, they identified 11 novel peptides. What made this study stand out was the scale of validation — they tested binding across a panel of 40 cell lines and found that binding patterns correlate with EGFR and KRAS genotype. Their best tetrameric constructs achieved binding affinities as tight as 7 picomolar. This paper laid the groundwork."
);

// ========== SLIDE 5: Chi 2017 ==========
addPaperSlide2Images("Chi", "2017",
  "Lung Cancer-Targeting Peptides for Multi-Subtype Indication",
  [
    "Phage display on H460 cells → HSP1, HSP2, HSP4 peptides",
    "Unique: targets SCLC + NSCLC (4 subtypes) — rare in this field",
    "HSP4-liposomal doxorubicin: median survival 131 vs 84 days (+47 d, p=0.0248)",
    "Theranostic: MRI tumor imaging (~42% signal reduction)",
    "Only orthotopic lung cancer model in entire 19-paper survey",
  ],
  "chi-2017-fig3-mri.jpg", "MRI tumor imaging with HSP peptides",
  "chi-2017-fig8-survival.jpg", "Survival: 131 vs 84 days",
  "Chi et al. used phage display on H460 cells and identified three peptides. What's unique is that these peptides work across both SCLC and NSCLC — four subtypes total. When they conjugated HSP4 to liposomal doxorubicin, treated mice survived 131 days vs 84 for controls. They also demonstrated theranostic use with MRI. This is the only paper using an orthotopic lung model."
);

// ========== SLIDE 6: Bakhshinejad 2018 ==========
addPaperSlideTextOnly("Bakhshinejad", "2018",
  "Novel Tumor-Binding Peptide LCP1",
  [
    "Ph.D.-7 phage display (7-mer library), 3 rounds on A549 cells",
    "Peptide: LCP1 (AWRTHTP) — 170-fold phage enrichment",
    "Selectivity index 5.1 for A549 vs normal lung WI-38 cells",
    "No binding to liver, esophageal, or breast cancer — genuine lung specificity",
    "Limitation: In vitro only; receptor unknown; early-stage discovery",
    "Demonstrates even short 7-mer peptides can achieve tissue-specific targeting",
  ],
  "Bakhshinejad identified LCP1, a short 7-mer peptide with a selectivity index of 5.1 for A549 lung cancer over normal lung cells. It showed no binding to other cancer types, suggesting genuine lung specificity. Early-stage work, but demonstrates even very short peptides can achieve tissue-specific targeting."
);

// ========== SLIDE 7: Furman 2022 ==========
addPaperSlideWithImage("Furman", "2022",
  "Cyclic Peptides for EGFR/EGFRvIII",
  [
    "First to combine phage display + NGS: 617,503 sequences screened",
    "Cyclic peptides P6 (NSCLC) and P9 (glioblastoma)",
    "P9-camptothecin conjugate: 2-3x more cytotoxic than free drug (IC50 2.2 uM)",
    "Targets EGFR wild-type and EGFRvIII mutant",
    "Massive parallel screening replaces manual colony picking",
  ],
  "furman-2022-fig6-docking.jpg",
  "Molecular docking of peptides to EGFR",
  "Furman et al. represent the next evolution. They combined phage display with next-generation sequencing — screening over 617,000 sequences computationally. Their cyclic peptide P9, when conjugated to camptothecin, was 2-3 times more cytotoxic than the free drug."
);

// ========== SLIDE 8: Zhou 2022 ==========
addPaperSlideTextOnly("Zhou", "2022",
  "NKTP-3 Cyclic D-Peptide for Dual Targeting",
  [
    "Structure-based computational design + virtual screening",
    "NKTP-3: cyclic D-peptide → protease-resistant, cell-permeable",
    "First dual-target peptide: NRP1 (surface) + KRAS G12D (intracellular)",
    "Selective for G12D over wild-type, G12C, G12V variants",
    "Strong antitumor activity in vivo (A427 xenograft); no obvious toxicity",
    "Paradigm: simultaneous surface + intracellular oncoprotein targeting",
  ],
  "Zhou et al. achieved something no one else did — dual targeting. NKTP-3 binds NRP1 on the cell surface to get inside, then targets intracellular KRAS G12D. It's selective for G12D over wild-type and other KRAS mutants. Strong antitumor activity in vivo with no obvious toxicity."
);

// ========== SLIDE 9: Allred 2023 ==========
addPaperSlideWithImage("Allred", "2023",
  "Peptide-Guided Saporin Delivery to NSCLC",
  [
    "Continuation of McGuire 2014 — same group (SRI International)",
    "Optimized MGS4_V8 (Ac-FHAVPQSFYT): 10-aa monomer, N-terminal acetylation",
    "EC50 < 40 nM on 4 NSCLC lines; with saporin: IC50 9.4 nM",
    "In vivo: 25-40x tumor accumulation; ~50% tumor reduction (p<0.01)",
    "Peptide retained in tumors for 72 hours; >48 h serum stability",
    "Textbook iterative optimization from discovery to therapeutic candidate",
  ],
  "allred-2023-fig5-tumor-homing.jpg",
  "240-fold tumor accumulation (NIR) + growth inhibition",
  "Remember McGuire 2014? This is the payoff — same group, nearly a decade later. They optimized their original peptide to MGS4_V8 with an IC50 of 9.4 nanomolar with saporin. In mice, 25-40 fold tumor accumulation and about 50% tumor reduction. A textbook example of iterative optimization."
);

// ========== SLIDE 10: Section 2 Intro ==========
addSectionSlide("2", "Anticancer Peptides\nwith Direct Activity", "Peptides that kill cancer cells directly through membrane disruption,\napoptosis, or anti-angiogenesis — the peptide IS the drug.", "Now let's shift from peptides that target to peptides that kill. These are anticancer peptides where the peptide itself is the therapeutic, not just a delivery vehicle.");

// ========== SLIDE 11: Shin 2022 ==========
addPaperSlideWithImage("Shin", "2022",
  "AC-P19M: De Novo AI-Designed Anticancer Peptide",
  [
    "AI tools used: mACPpred, ACPred, ENNACT for de novo design",
    "AC-P19M: net charge +9, alpha-helical structure",
    "IC50 ~10-15 uM on A549/H460; zero toxicity at 100 uM in normal cells",
    "Multi-mechanism: apoptosis + membrane disruption + VEGFR2 suppression + anti-EMT",
    "Early example of AI-assisted peptide design with validated activity",
  ],
  "shin-2022-fig1-design.jpg",
  "De novo design pipeline with AI prediction",
  "Shin et al. used AI prediction tools to computationally design a peptide from scratch. AC-P19M kills lung cancer cells at IC50s of 10-15 micromolar with zero toxicity to normal cells up to 100 micromolar. What's remarkable is the multi-mechanism activity — apoptosis, membrane disruption, VEGFR2 suppression, and anti-EMT all in one peptide."
);

// ========== SLIDE 12: Yang 2022 ==========
addPaperSlide2Images("Yang", "2022",
  "K4F6K4 Triblock Amphiphilic Peptide",
  [
    "Rational triblock design: KKKK-FFFFFF-KKKK — just 14 residues",
    "Cationic blocks interact with negatively charged cancer membrane; hydrophobic core disrupts it",
    "IC50 62.6 ug/mL on A549; 81.6% tumor volume reduction at Day 28 in vivo",
    "12.9x selectivity over normal MRC-5 lung fibroblasts; no in vivo toxicity",
    "Fundamentally different from receptor-based targeting — simplicity is the point",
  ],
  "yang-2022-fig7-tumor-reduction.jpg", "81.6% tumor volume reduction in vivo",
  "yang-2022-fig8-mechanism.jpg", "Membrane disruption mechanism",
  "Yang et al. took a completely different approach — a simple triblock peptide of 14 residues. In vivo, this achieved 81.6% tumor volume reduction at Day 28 with 12.9-fold selectivity over normal cells. The simplicity is the point — fundamentally different from receptor-based targeting."
);

// ========== SLIDE 13: Section 3 Intro ==========
addSectionSlide("3", "Peptide-Drug Conjugates\nand Delivery", "Peptides as guided missiles delivering cytotoxic payloads — the peptide equivalent\nof antibody-drug conjugates, at a fraction of the size.", "Section 3 covers peptide-drug conjugates — PDCs — where peptides serve as guided missiles delivering cytotoxic payloads directly to cancer cells. Think of these as the peptide equivalent of antibody-drug conjugates, but at a fraction of the size.");

// ========== SLIDE 14: Mudd 2022 ==========
addPaperSlide2Images("Mudd", "2022",
  "BT8009 Bicycle Toxin Conjugate (Nectin-4)",
  [
    "Bicycle peptide (~4 kDa) constrained by TATA scaffold + MMAE cytotoxin",
    "KD 2.8 nM for Nectin-4 — antibody-like affinity at 1/30th molecular weight",
    "Near-complete tumor regression by Day 18 in xenograft (3 mg/kg 2x/week)",
    "Phase I/II clinical trial — most advanced peptide therapeutic in survey",
    "First-in-class bicycle toxin conjugate; now called zelenectide pevedotin",
  ],
  "mudd-2022-fig3-bt8009-structure.jpg", "BT8009 chemical structure",
  "mudd-2022-fig4-efficacy.jpg", "Near-complete tumor regression",
  "BT8009 is the star of this survey. At just 4 kilodaltons, it achieves antibody-like affinity for Nectin-4. Near-complete tumor regression by Day 18. And it's in Phase I/II clinical trials — the most clinically advanced peptide therapeutic in our survey."
);

// ========== SLIDE 15: Singh 2025 ==========
addPaperSlideTextOnly("Singh", "2025",
  "SFTI-G5: First Oral EGFR-Targeting Peptide",
  [
    "EGFR-binding epitope grafted into SFTI-1 sunflower trypsin inhibitor scaffold",
    "14-aa bicyclic peptide with non-natural Anapa residues",
    "IC50 73 nM on Calu-3 NSCLC; >500-fold selectivity over normal cells",
    "Breakthrough: oral bioavailability confirmed — SFTI scaffold resists digestion",
    "Significant tumor growth delay (p<0.001) in xenograft + metastasis model",
    "Paradigm shift: anticancer peptide as a pill instead of injection",
  ],
  "Singh et al. may have achieved the biggest paradigm shift. SFTI-G5 has IC50 of 73 nanomolar with over 500-fold selectivity. But the breakthrough is oral bioavailability — the SFTI scaffold protects against gut digestion. Imagine taking an anticancer peptide as a pill."
);

// ========== SLIDE 16: Section 4 Intro ==========
addSectionSlide("4", "Nanoparticles and\nDelivery Platforms", "How peptides are being integrated into nanocarrier systems\nfor enhanced delivery to lung tumors.", "Section 4 covers the nanoparticle angle — how peptides are being integrated into nanocarrier systems for enhanced delivery to lung tumors.");

// ========== SLIDE 17: Kim 2024 ==========
addPaperSlideTextOnly("Kim & Park", "2024",
  "Functionalized Peptides in Nanomedicine",
  [
    "Three peptide-NP strategies: targeting ligands, self-assembly, stimuli-responsive",
    "Lung highlight: CPP33 + ZIF-90 MOF + survivin siRNA + Oridonin",
    "CPP33-ZIF-90: preferential A549 uptake and tumor reduction in vivo",
    "Platforms: metal-organic frameworks, gold NPs, mesoporous silica, liposomes",
    "Dual-payload approach combines gene therapy with chemotherapy",
  ],
  "Kim and Park reviewed three strategies: peptides as targeting ligands on nanoparticle surfaces, self-assembling peptide nanostructures, and stimuli-responsive peptide systems. The lung cancer highlight was CPP33 loaded onto a ZIF-90 metal-organic framework carrying both survivin siRNA and Oridonin."
);

// ========== SLIDE 18: Lee 2025 ==========
addPaperSlideTextOnly("Lee", "2025",
  "Engineered Nanocarriers for Lung Cancer",
  [
    "Comprehensive review: liposomes, PLGA, dendrimers, exosomes, inorganic NPs",
    "Clinical: T-DXd (trastuzumab deruxtecan) — ~55% response in HER2-mutant NSCLC (approved)",
    "Emerging trend: inhalable nanoparticle systems for direct pulmonary deposition",
    "Stimuli-responsive: pH, enzyme, hypoxia-triggered release",
    "Inhalable delivery bypasses systemic circulation — intuitive for lung cancer",
  ],
  "Lee et al. provided the most comprehensive nanocarrier review. The clinical highlight is T-DXd with about 55% response rate in HER2-mutant NSCLC. The emerging trend they identify is inhalable nanoparticle systems — direct pulmonary deposition that bypasses systemic circulation entirely."
);

// ========== SLIDE 19: Section 5 Intro ==========
addSectionSlide("5", "Computational and\nAI-Driven Design", "How AI and machine learning are reshaping peptide design and discovery.", "Section 5 looks at the computational revolution — how AI and machine learning are reshaping peptide design and discovery.");

// ========== SLIDE 20: Wu 2025 ==========
addPaperSlideTextOnly("Wu", "2025",
  "AI-Driven Anticancer Peptide Discovery",
  [
    "Reviewed 68 AI-based ACP prediction models",
    "Models span: SVM, Random Forest, CNN, LSTM, Transformer, ProtBERT, ESM",
    "Databases: CancerPPD, ApInAPDB, SATPdb, DBAASP (lung lines in training data)",
    "4-stage framework: data curation → training → interpretability → wet-lab validation",
    "Critical gap: most models lack experimental validation",
    "No AI-discovered ACP has reached clinical trials — validation gap is real",
  ],
  "Wu et al. reviewed 68 AI-based ACP prediction models spanning SVMs to protein language models. They propose a four-stage framework. The critical gap: most of these 68 models lack experimental validation. No AI-discovered ACP has reached clinical trials yet. The AI hype is real, but the validation gap is equally real."
);

// ========== SLIDE 21: Chowdhury 2025 ==========
addPaperSlideTextOnly("Chowdhury", "2025",
  "Molecular Chimera: Grafted Stable Peptides",
  [
    "Concept: plant-derived scaffolds grafted with cancer-targeting epitopes",
    "Cyclotides: 28-37 aa, cyclic cystine knot, 3 disulfide bonds — extraordinary stability",
    "SFTI-1: 14 aa bicyclic — the scaffold behind Singh's SFTI-G5",
    "Targets: EGFR, HER2, PD-L1, VEGF, integrins, p53-HDM2",
    "Key advantage: oral bioavailability from inherent scaffold stability",
    "Same group (Jois lab, LSU) as Singh 2025 — theory meets practice",
  ],
  "Chowdhury et al. provide the theoretical framework behind Singh's SFTI-G5. The concept is molecular chimeras: take plant-derived scaffolds like cyclotides and graft in cancer-targeting epitopes. The scaffold provides stability while the grafted loop provides target specificity. This is the blueprint for next-gen orally available peptide therapeutics."
);

// ========== SLIDE 22: Section 6 Intro ==========
addSectionSlide("6", "Reviews and\nLandscape Papers", "Five review papers providing the broader context for the field.", "Section 6 covers five review papers that provide the broader context for everything we've discussed.");

// ========== SLIDE 23: Karankar 2025 ==========
addPaperSlideTextOnly("Karankar", "2025",
  "Peptide-Driven Strategies Against Lung Cancer",
  [
    "Maps peptides against 6 NSCLC driver mutations: EGFR, TP53, BRAF, MET, ROS1, ALK",
    "Key peptides: GE11 (EGFR), p28 (p53/azurin), NKTP-3 (KRAS G12D)",
    "Peptides as bridge between small-molecule TKIs and antibodies",
    "Potential for TKI-resistant tumors — a growing clinical challenge",
    "Gap: zero experimental peptides targeting ALK, ROS1, or MET fusions",
  ],
  "Karankar et al. mapped peptides against six NSCLC driver mutations. Their key insight: peptides occupy a sweet spot between small-molecule TKIs and large antibodies. But notably, they found zero experimental peptides targeting ALK, ROS1, or MET fusions — a clear gap."
);

// ========== SLIDE 24: Karati + Nhan ==========
{
  const s = pres.addSlide();
  s.background = { color: C.offWhite };
  s.addShape(pres.shapes.RECTANGLE, { x: 0, y: 0, w: 10, h: 0.06, fill: { color: C.accent } });

  // Left card: Karati
  s.addShape(pres.shapes.RECTANGLE, { x: 0.5, y: 0.4, w: 4.3, h: 4.8, fill: { color: C.white }, shadow: cardShadow() });
  s.addShape(pres.shapes.RECTANGLE, { x: 0.5, y: 0.4, w: 4.3, h: 0.06, fill: { color: C.accent } });
  s.addText("Karati et al. (2025)", { x: 0.8, y: 0.65, w: 3.7, h: 0.4, fontSize: 11, fontFace: "Calibri", color: C.teal, bold: true, margin: 0 });
  s.addText("Peptide Drugs & Chemoresistance", { x: 0.8, y: 1.0, w: 3.7, h: 0.5, fontSize: 15, fontFace: "Georgia", color: C.darkText, bold: true, margin: 0 });
  s.addText([
    { text: "ACPs bypass P-glycoprotein efflux via membrane disruption", options: { bullet: true, breakLine: true, fontSize: 11, color: C.darkText } },
    { text: "Fundamentally different from conventional drug mechanisms", options: { bullet: true, breakLine: true, fontSize: 11, color: C.darkText } },
    { text: "Targets DNA repair, EMT, apoptosis evasion simultaneously", options: { bullet: true, breakLine: true, fontSize: 11, color: C.darkText } },
    { text: "Challenge: short half-life remains primary limitation", options: { bullet: true, fontSize: 11, color: C.darkText } },
  ], { x: 0.8, y: 1.6, w: 3.7, h: 3.2, paraSpaceAfter: 6, valign: "top", margin: 0 });

  // Right card: Nhan
  s.addShape(pres.shapes.RECTANGLE, { x: 5.2, y: 0.4, w: 4.3, h: 4.8, fill: { color: C.white }, shadow: cardShadow() });
  s.addShape(pres.shapes.RECTANGLE, { x: 5.2, y: 0.4, w: 4.3, h: 0.06, fill: { color: C.accent } });
  s.addText("Nhan et al. (2023)", { x: 5.5, y: 0.65, w: 3.7, h: 0.4, fontSize: 11, fontFace: "Calibri", color: C.teal, bold: true, margin: 0 });
  s.addText("Peptide-Based Agents for Cancer", { x: 5.5, y: 1.0, w: 3.7, h: 0.5, fontSize: 15, fontFace: "Georgia", color: C.darkText, bold: true, margin: 0 });
  s.addText([
    { text: "Broadest scope: 56 pre-clinical + 10 clinical-stage peptides", options: { bullet: true, breakLine: true, fontSize: 11, color: C.darkText } },
    { text: "Clinical: LUNA18 (KRAS), p28 (p53), ALRN-6924", options: { bullet: true, breakLine: true, fontSize: 11, color: C.darkText } },
    { text: "Lung: NKTP-3, KRpep-2d, 99mTc-3PRGD2 imaging", options: { bullet: true, breakLine: true, fontSize: 11, color: C.darkText } },
    { text: "FDA history: Leuprorelin (1985) to Carfilzomib (2012)", options: { bullet: true, fontSize: 11, color: C.darkText } },
  ], { x: 5.5, y: 1.6, w: 3.7, h: 3.2, paraSpaceAfter: 6, valign: "top", margin: 0 });

  s.addShape(pres.shapes.RECTANGLE, { x: 0, y: 5.325, w: 10, h: 0.3, fill: { color: C.darkBg } });
  s.addNotes("Karati et al. focused on chemoresistance — ACPs bypass P-glycoprotein efflux through membrane disruption, fundamentally different from conventional drugs. Nhan et al. provided the broadest scope — 56 pre-clinical and 10 clinical-stage peptides, with FDA history going back to Leuprorelin in 1985.");
}

// ========== SLIDE 25: Alamdari + Bauso ==========
{
  const s = pres.addSlide();
  s.background = { color: C.offWhite };
  s.addShape(pres.shapes.RECTANGLE, { x: 0, y: 0, w: 10, h: 0.06, fill: { color: C.accent } });

  // Left card
  s.addShape(pres.shapes.RECTANGLE, { x: 0.5, y: 0.4, w: 4.3, h: 4.8, fill: { color: C.white }, shadow: cardShadow() });
  s.addShape(pres.shapes.RECTANGLE, { x: 0.5, y: 0.4, w: 4.3, h: 0.06, fill: { color: C.accent } });
  s.addText("Alamdari-palangi et al. (2023)", { x: 0.8, y: 0.65, w: 3.7, h: 0.4, fontSize: 11, fontFace: "Calibri", color: C.teal, bold: true, margin: 0 });
  s.addText("Peptide-Agent Conjugates", { x: 0.8, y: 1.0, w: 3.7, h: 0.5, fontSize: 15, fontFace: "Georgia", color: C.darkText, bold: true, margin: 0 });
  s.addText([
    { text: "PDC landscape: design principles, linker chemistry", options: { bullet: true, breakLine: true, fontSize: 11, color: C.darkText } },
    { text: "28 clinical trials of peptide-drug conjugates cataloged", options: { bullet: true, breakLine: true, fontSize: 11, color: C.darkText } },
    { text: "60+ approved peptide therapeutics; 12 FDA/EMA cancer drugs", options: { bullet: true, breakLine: true, fontSize: 11, color: C.darkText } },
    { text: "BT8009 featured as key next-gen design example", options: { bullet: true, fontSize: 11, color: C.darkText } },
  ], { x: 0.8, y: 1.6, w: 3.7, h: 3.2, paraSpaceAfter: 6, valign: "top", margin: 0 });

  // Right card
  s.addShape(pres.shapes.RECTANGLE, { x: 5.2, y: 0.4, w: 4.3, h: 4.8, fill: { color: C.white }, shadow: cardShadow() });
  s.addShape(pres.shapes.RECTANGLE, { x: 5.2, y: 0.4, w: 4.3, h: 0.06, fill: { color: C.accent } });
  s.addText("Bauso et al. (2024)", { x: 5.5, y: 0.65, w: 3.7, h: 0.4, fontSize: 11, fontFace: "Calibri", color: C.teal, bold: true, margin: 0 });
  s.addText("Natural & Synthetic ACPs", { x: 5.5, y: 1.0, w: 3.7, h: 0.5, fontSize: 15, fontFace: "Georgia", color: C.darkText, bold: true, margin: 0 });
  s.addText([
    { text: "ACPs across 10 cancer types; 7 lung peptides cataloged", options: { bullet: true, breakLine: true, fontSize: 11, color: C.darkText } },
    { text: "Lung: MANS, FCHO1, TMEM39AS41, MP06, AC-P19M, DTX-P7", options: { bullet: true, breakLine: true, fontSize: 11, color: C.darkText } },
    { text: ">1,000 clinical trials using ACPs globally", options: { bullet: true, breakLine: true, fontSize: 11, color: C.darkText } },
    { text: "AC-P19M: 5-fold more toxicity to cancer vs normal cells", options: { bullet: true, fontSize: 11, color: C.darkText } },
  ], { x: 5.5, y: 1.6, w: 3.7, h: 3.2, paraSpaceAfter: 6, valign: "top", margin: 0 });

  s.addShape(pres.shapes.RECTANGLE, { x: 0, y: 5.325, w: 10, h: 0.3, fill: { color: C.darkBg } });
  s.addNotes("Alamdari-palangi cataloged 28 clinical trials of peptide-drug conjugates, highlighting BT8009. Bauso et al. cataloged seven lung cancer peptides with full sequences and noted over 1,000 clinical trials using ACPs are ongoing globally.");
}

// ========== SLIDE 26: Section 7 Intro ==========
addSectionSlide("7", "Cross-Cutting\nAnalysis", "Patterns and insights across all 19 papers.", "Now let's step back and look at the patterns across all 19 papers.");

// ========== SLIDE 27: Method Evolution ==========
{
  const s = pres.addSlide();
  s.background = { color: C.offWhite };
  s.addShape(pres.shapes.RECTANGLE, { x: 0, y: 0, w: 10, h: 0.06, fill: { color: C.accent } });
  s.addText("Method Evolution (2014 \u2192 2025)", {
    x: 0.6, y: 0.25, w: 8.8, h: 0.6,
    fontSize: 22, fontFace: "Georgia", color: C.darkText, bold: true, margin: 0,
  });

  const eras = [
    { era: "Phage Display", years: "2014-2018", desc: "Cell-based biopanning, iterative selection", papers: "McGuire, Chi, Bakhshinejad", color: C.deepBlue },
    { era: "NGS + Computation", years: "2022", desc: "Phage display + sequencing; virtual screening", papers: "Furman, Zhou", color: C.teal },
    { era: "De Novo Design", years: "2022", desc: "AI-predicted sequences; rational amphiphilic design", papers: "Shin, Yang", color: C.accent },
    { era: "Scaffold Engineering", years: "2025", desc: "Plant scaffolds grafted with targeting epitopes", papers: "Singh, Chowdhury", color: C.accentGreen },
    { era: "AI/ML at Scale", years: "2025", desc: "68 models; language models; end-to-end", papers: "Wu", color: C.accentPurple },
  ];

  eras.forEach((e, i) => {
    const yBase = 1.1 + i * 0.85;
    // Color bar
    s.addShape(pres.shapes.RECTANGLE, { x: 0.6, y: yBase, w: 0.08, h: 0.7, fill: { color: e.color } });
    // Era name
    s.addText(e.era, { x: 0.9, y: yBase, w: 2.2, h: 0.35, fontSize: 14, fontFace: "Calibri", color: C.darkText, bold: true, margin: 0 });
    s.addText(e.years, { x: 0.9, y: yBase + 0.3, w: 2.2, h: 0.35, fontSize: 11, fontFace: "Calibri", color: C.medGray, margin: 0 });
    // Description
    s.addText(e.desc, { x: 3.3, y: yBase, w: 4, h: 0.7, fontSize: 12, fontFace: "Calibri", color: C.darkText, valign: "middle", margin: 0 });
    // Papers
    s.addText(e.papers, { x: 7.5, y: yBase, w: 2.2, h: 0.7, fontSize: 11, fontFace: "Calibri", color: C.teal, valign: "middle", margin: 0 });
  });

  // Arrow
  s.addText("Empirical screening  \u2192  Rational, computationally guided design", {
    x: 0.6, y: 5.0, w: 8.8, h: 0.4,
    fontSize: 12, fontFace: "Calibri", color: C.accent, italic: true, align: "center", margin: 0,
  });
  s.addShape(pres.shapes.RECTANGLE, { x: 0, y: 5.325, w: 10, h: 0.3, fill: { color: C.darkBg } });
  s.addNotes("The field has evolved through distinct eras. Classic phage display in 2014-2018, then NGS merged with phage display in 2022, de novo AI design in 2022, scaffold engineering by 2025, and large-scale AI models by 2025. The trajectory is clear — from empirical screening toward rational, computationally guided design.");
}

// ========== SLIDE 28: Target Landscape ==========
{
  const s = pres.addSlide();
  s.background = { color: C.offWhite };
  s.addShape(pres.shapes.RECTANGLE, { x: 0, y: 0, w: 10, h: 0.06, fill: { color: C.accent } });
  s.addText("Target Landscape", {
    x: 0.6, y: 0.25, w: 8.8, h: 0.6,
    fontSize: 22, fontFace: "Georgia", color: C.darkText, bold: true, margin: 0,
  });

  const headerRow = [
    { text: "Target", options: { fill: { color: C.deepBlue }, color: C.white, bold: true, fontSize: 11, fontFace: "Calibri", align: "left" } },
    { text: "Papers", options: { fill: { color: C.deepBlue }, color: C.white, bold: true, fontSize: 11, fontFace: "Calibri", align: "center" } },
    { text: "Most Advanced Peptide", options: { fill: { color: C.deepBlue }, color: C.white, bold: true, fontSize: 11, fontFace: "Calibri", align: "left" } },
    { text: "Stage", options: { fill: { color: C.deepBlue }, color: C.white, bold: true, fontSize: 11, fontFace: "Calibri", align: "center" } },
  ];

  const dataRows = [
    ["EGFR/HER2", "8", "SFTI-G5 (oral, IC50 73 nM)", "Pre-clinical"],
    ["Nectin-4", "2", "BT8009-MMAE", "Phase I/II"],
    ["KRAS G12D", "4", "NKTP-3, LUNA18", "Phase I/II"],
    ["p53/HDM2", "2", "p28 (azurin)", "Phase I"],
    ["PD-1/PD-L1", "3", "Cyclotide grafts", "Early research"],
    ["KRAS G12C", "0", "—", "GAP"],
    ["ALK/ROS1/MET", "0", "—", "GAP"],
  ].map(row => row.map((cell, ci) => ({
    text: cell,
    options: {
      fontSize: 11, fontFace: "Calibri",
      color: cell === "GAP" ? C.accentRed : C.darkText,
      bold: cell === "GAP",
      align: ci === 1 || ci === 3 ? "center" : "left",
      fill: { color: row[3] === "GAP" ? "FEF2F2" : C.white },
    },
  })));

  s.addTable([headerRow, ...dataRows], {
    x: 0.6, y: 1.0, w: 8.8,
    colW: [2, 1, 3.5, 2.3],
    border: { pt: 0.5, color: C.lightGray },
    rowH: [0.4, 0.4, 0.4, 0.4, 0.4, 0.4, 0.4, 0.4],
  });

  s.addText("Red rows = significant unmet needs with zero experimental peptides", {
    x: 0.6, y: 4.5, w: 8.8, h: 0.4,
    fontSize: 11, fontFace: "Calibri", color: C.accentRed, italic: true, margin: 0,
  });
  s.addShape(pres.shapes.RECTANGLE, { x: 0, y: 5.325, w: 10, h: 0.3, fill: { color: C.darkBg } });
  s.addNotes("Looking at molecular targets: EGFR and HER2 appear in 8 papers. Nectin-4 has BT8009 in Phase I/II trials. KRAS G12D is covered by 4 papers. But look at the gaps: zero peptides targeting KRAS G12C — the most common KRAS mutation in NSCLC smokers — and zero for ALK, ROS1, or MET fusions.");
}

// ========== SLIDE 29: Efficacy Comparison ==========
{
  const s = pres.addSlide();
  s.background = { color: C.offWhite };
  s.addShape(pres.shapes.RECTANGLE, { x: 0, y: 0, w: 10, h: 0.06, fill: { color: C.accent } });
  s.addText("Top Performers — Quantitative Efficacy", {
    x: 0.6, y: 0.25, w: 8.8, h: 0.6,
    fontSize: 22, fontFace: "Georgia", color: C.darkText, bold: true, margin: 0,
  });

  const stats = [
    { metric: "Best Binding", value: "KD 0.0071 nM", peptide: "McGuire tetramers", color: C.deepBlue },
    { metric: "Best IC50 (conjugate)", value: "9.4 nM", peptide: "MGS4_V8-saporin", color: C.teal },
    { metric: "Best IC50 (free)", value: "73 nM", peptide: "SFTI-G5", color: C.accent },
    { metric: "Tumor Reduction", value: "-81.6%", peptide: "K4F6K4 (Day 28)", color: C.accentGreen },
    { metric: "Survival Extension", value: "+47 days", peptide: "HSP4-PLD", color: C.accentAmber },
    { metric: "Selectivity", value: ">500-fold", peptide: "SFTI-G5", color: C.accentPurple },
  ];

  stats.forEach((st, i) => {
    const col = i % 3;
    const row = Math.floor(i / 3);
    const xBase = 0.6 + col * 3.1;
    const yBase = 1.1 + row * 2.1;

    s.addShape(pres.shapes.RECTANGLE, { x: xBase, y: yBase, w: 2.8, h: 1.8, fill: { color: C.white }, shadow: cardShadow() });
    s.addShape(pres.shapes.RECTANGLE, { x: xBase, y: yBase, w: 2.8, h: 0.06, fill: { color: st.color } });
    s.addText(st.metric, { x: xBase + 0.15, y: yBase + 0.15, w: 2.5, h: 0.35, fontSize: 11, fontFace: "Calibri", color: C.medGray, margin: 0 });
    s.addText(st.value, { x: xBase + 0.15, y: yBase + 0.5, w: 2.5, h: 0.6, fontSize: 24, fontFace: "Georgia", color: st.color, bold: true, margin: 0 });
    s.addText(st.peptide, { x: xBase + 0.15, y: yBase + 1.15, w: 2.5, h: 0.4, fontSize: 11, fontFace: "Calibri", color: C.darkText, margin: 0 });
  });

  s.addShape(pres.shapes.RECTANGLE, { x: 0, y: 5.325, w: 10, h: 0.3, fill: { color: C.darkBg } });
  s.addNotes("Here are the headline numbers. Best binding: 7 picomolar. Best cytotoxicity: 9.4 nanomolar. Best tumor reduction: 81.6%. Longest survival extension: 47 days. Best selectivity: over 500-fold. These are compelling numbers that rival antibody-drug conjugates.");
}

// ========== SLIDE 30: Clinical Pipeline ==========
{
  const s = pres.addSlide();
  s.background = { color: C.offWhite };
  s.addShape(pres.shapes.RECTANGLE, { x: 0, y: 0, w: 10, h: 0.06, fill: { color: C.accent } });
  s.addText("Clinical Translation Pipeline", {
    x: 0.6, y: 0.25, w: 8.8, h: 0.6,
    fontSize: 22, fontFace: "Georgia", color: C.darkText, bold: true, margin: 0,
  });

  const stages = [
    { stage: "Discovery / In Vitro", compounds: "LCP1, AC-P19M, P6/P9", papers: "3 papers", width: 2.0, color: C.medGray },
    { stage: "In Vivo (Xenograft)", compounds: "HSP4, K4F6K4, NKTP-3, MGS4_V8, SFTI-G5", papers: "6 papers", width: 3.2, color: C.teal },
    { stage: "Clinical Trials", compounds: "BT8009 (Phase I/II)", papers: "1 paper", width: 1.4, color: C.accentGreen },
    { stage: "AI (Computational)", compounds: "68 models, 0 clinical validation", papers: "1 paper", width: 2.0, color: C.accentPurple },
  ];

  // Pipeline funnel visualization
  stages.forEach((st, i) => {
    const yBase = 1.2 + i * 1.0;
    // Stage bar
    s.addShape(pres.shapes.RECTANGLE, { x: 0.6, y: yBase, w: 8.8, h: 0.08, fill: { color: C.lightGray } });
    s.addShape(pres.shapes.RECTANGLE, { x: 0.6, y: yBase, w: st.width, h: 0.08, fill: { color: st.color } });
    // Labels
    s.addText(st.stage, { x: 0.6, y: yBase + 0.15, w: 2.5, h: 0.35, fontSize: 14, fontFace: "Calibri", color: C.darkText, bold: true, margin: 0 });
    s.addText(st.compounds, { x: 3.3, y: yBase + 0.15, w: 4.5, h: 0.35, fontSize: 12, fontFace: "Calibri", color: C.darkText, margin: 0 });
    s.addText(st.papers, { x: 8.0, y: yBase + 0.15, w: 1.4, h: 0.35, fontSize: 11, fontFace: "Calibri", color: C.medGray, align: "right", margin: 0 });
  });

  s.addText("Pipeline is heavily front-loaded \u2014 discovery is outpacing translation", {
    x: 0.6, y: 4.8, w: 8.8, h: 0.4,
    fontSize: 12, fontFace: "Calibri", color: C.accentRed, italic: true, margin: 0,
  });
  s.addShape(pres.shapes.RECTANGLE, { x: 0, y: 5.325, w: 10, h: 0.3, fill: { color: C.darkBg } });
  s.addNotes("Where does everything stand? Most papers remain at discovery stage. Six papers have in vivo xenograft data. Only BT8009 has reached clinical trials. And the AI space has zero clinical validation. The pipeline is heavily front-loaded — discovery is outpacing translation.");
}

// ========== SLIDE 31: Key Gaps ==========
{
  const s = pres.addSlide();
  s.background = { color: C.offWhite };
  s.addShape(pres.shapes.RECTANGLE, { x: 0, y: 0, w: 10, h: 0.06, fill: { color: C.accentRed } });
  s.addText("Key Gaps in the Field", {
    x: 0.6, y: 0.25, w: 8.8, h: 0.6,
    fontSize: 22, fontFace: "Georgia", color: C.darkText, bold: true, margin: 0,
  });

  const gaps = [
    { gap: "KRAS G12C", desc: "Most common KRAS mutation in NSCLC smokers — zero peptides" },
    { gap: "SCLC", desc: "Only Chi 2017 addresses it; aggressive subtype, no targeted therapies" },
    { gap: "ALK/ROS1/MET", desc: "Mentioned in reviews but zero experimental peptides exist" },
    { gap: "Orthotopic Models", desc: "Only 1 of 19 papers uses lung-specific tumor model" },
    { gap: "Head-to-Head", desc: "No comparison with standard-of-care antibodies or TKIs" },
    { gap: "AI Validation", desc: "68 prediction models, most without wet-lab confirmation" },
    { gap: "Immunotherapy", desc: "No studies combining peptides with checkpoint inhibitors" },
  ];

  gaps.forEach((g, i) => {
    const yBase = 1.0 + i * 0.6;
    s.addShape(pres.shapes.RECTANGLE, { x: 0.6, y: yBase + 0.08, w: 0.08, h: 0.35, fill: { color: C.accentRed } });
    s.addText(g.gap, { x: 0.9, y: yBase, w: 2.2, h: 0.5, fontSize: 13, fontFace: "Calibri", color: C.darkText, bold: true, margin: 0, valign: "middle" });
    s.addText(g.desc, { x: 3.3, y: yBase, w: 6.2, h: 0.5, fontSize: 12, fontFace: "Calibri", color: C.darkText, margin: 0, valign: "middle" });
  });

  s.addShape(pres.shapes.RECTANGLE, { x: 0, y: 5.325, w: 10, h: 0.3, fill: { color: C.darkBg } });
  s.addNotes("Critical gaps: KRAS G12C with no peptide solution. SCLC addressed by only one paper. No head-to-head comparisons with standard of care. No combination studies with immunotherapy. Only one orthotopic model.");
}

// ========== SLIDE 32: Five Opportunities ==========
{
  const s = pres.addSlide();
  s.background = { color: C.offWhite };
  s.addShape(pres.shapes.RECTANGLE, { x: 0, y: 0, w: 10, h: 0.06, fill: { color: C.accentGreen } });
  s.addText("Five Emerging Opportunities", {
    x: 0.6, y: 0.25, w: 8.8, h: 0.6,
    fontSize: 22, fontFace: "Georgia", color: C.darkText, bold: true, margin: 0,
  });

  const opps = [
    { num: "1", title: "Oral Peptide Therapeutics", desc: "SFTI-G5 proves oral bioavailability is achievable. Generalizing scaffold grafting to other targets could transform patient compliance.", color: C.deepBlue },
    { num: "2", title: "AI-to-Clinic", desc: "First AI-discovered ACP to reach clinical trials will validate the entire computational field.", color: C.accentPurple },
    { num: "3", title: "Peptide-Immunotherapy", desc: "PD-L1-targeting cyclotide grafts could synergize with checkpoint inhibitors.", color: C.teal },
    { num: "4", title: "Inhalable Delivery", desc: "Direct pulmonary deposition bypasses systemic distribution \u2014 intuitive for lung cancer.", color: C.accentAmber },
    { num: "5", title: "Dual-Target Peptides", desc: "NKTP-3 proved surface + intracellular targeting works. High-impact expansion.", color: C.accentGreen },
  ];

  opps.forEach((o, i) => {
    const yBase = 1.0 + i * 0.88;
    s.addShape(pres.shapes.RECTANGLE, { x: 0.6, y: yBase, w: 8.8, h: 0.75, fill: { color: C.white }, shadow: cardShadow() });
    s.addShape(pres.shapes.RECTANGLE, { x: 0.6, y: yBase, w: 0.08, h: 0.75, fill: { color: o.color } });
    // Number circle
    s.addShape(pres.shapes.OVAL, { x: 0.9, y: yBase + 0.12, w: 0.5, h: 0.5, fill: { color: o.color } });
    s.addText(o.num, { x: 0.9, y: yBase + 0.12, w: 0.5, h: 0.5, fontSize: 16, fontFace: "Calibri", color: C.white, bold: true, align: "center", valign: "middle", margin: 0 });
    s.addText(o.title, { x: 1.6, y: yBase + 0.05, w: 7.5, h: 0.32, fontSize: 14, fontFace: "Calibri", color: C.darkText, bold: true, margin: 0 });
    s.addText(o.desc, { x: 1.6, y: yBase + 0.37, w: 7.5, h: 0.35, fontSize: 11, fontFace: "Calibri", color: C.medGray, margin: 0 });
  });

  s.addShape(pres.shapes.RECTANGLE, { x: 0, y: 5.325, w: 10, h: 0.3, fill: { color: C.darkBg } });
  s.addNotes("Five opportunities: 1) Oral peptide therapeutics. 2) AI-to-clinic validation. 3) Peptide-immunotherapy combinations. 4) Inhalable delivery. 5) Dual-target peptides.");
}

// ========== SLIDE 33: References ==========
{
  const s = pres.addSlide();
  s.background = { color: C.darkBg };
  s.addShape(pres.shapes.RECTANGLE, { x: 0, y: 0, w: 10, h: 0.06, fill: { color: C.accent } });
  s.addText("References", {
    x: 0.6, y: 0.2, w: 4, h: 0.5,
    fontSize: 22, fontFace: "Georgia", color: C.white, bold: true, margin: 0,
  });
  s.addText("19 Papers Surveyed (2014\u20132025)", {
    x: 0.6, y: 0.65, w: 4, h: 0.3,
    fontSize: 12, fontFace: "Calibri", color: C.medGray, margin: 0,
  });

  const refs = [
    "1. McGuire et al. (2014) Sci Rep",
    "2. Chi et al. (2017) Theranostics",
    "3. Bakhshinejad et al. (2018) IJPR",
    "4. Furman et al. (2022) Pharmaceutics",
    "5. Zhou et al. (2022) JACS",
    "6. Shin et al. (2022) IJMS",
    "7. Yang et al. (2022) Pharmaceutics",
    "8. Mudd et al. (2022) J Med Chem",
    "9. Nhan et al. (2023) IJMS",
    "10. Alamdari et al. (2023) JCRC",
  ];
  const refs2 = [
    "11. Allred et al. (2023) Commun Biol",
    "12. Bauso et al. (2024) IJMS",
    "13. Kim & Park (2024) Biomedicines",
    "14. Singh et al. (2025) ACS PTS",
    "15. Lee et al. (2025) Explor TAT",
    "16. Wu et al. (2025) iMetaOmics",
    "17. Chowdhury et al. (2025) IJPRT",
    "18. Karankar et al. (2025) Life Sci",
    "19. Karati et al. (2025) IJPRT",
  ];

  const makeRefText = (r) => ({ text: r, options: { breakLine: true, fontSize: 10, color: C.medGray, fontFace: "Calibri" } });

  s.addText(refs.map(makeRefText), { x: 0.6, y: 1.1, w: 4.2, h: 4.0, margin: 0 });
  s.addText(refs2.map(makeRefText), { x: 5.2, y: 1.1, w: 4.2, h: 4.0, margin: 0 });

  // Thank you
  s.addText("Thank you", {
    x: 0.6, y: 4.8, w: 8.8, h: 0.5,
    fontSize: 18, fontFace: "Georgia", color: C.accent, align: "center", margin: 0,
  });

  s.addNotes("All 19 papers are listed here. Thank you for your attention — I'm happy to take questions.");
}

// Write file
const outPath = path.join(__dirname, "cancer-peptides-survey.pptx");
pres.writeFile({ fileName: outPath }).then(() => {
  console.log("Presentation created:", outPath);
}).catch(err => {
  console.error("Error:", err);
});
