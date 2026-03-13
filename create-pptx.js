const pptxgen = require("pptxgenjs");
const path = require("path");

const pres = new pptxgen();
pres.layout = "LAYOUT_16x9";
pres.author = "Cancer Peptides Literature Survey";
pres.title = "Cancer-Targeting Peptides for Lung Cancer (2014-2025)";

// --- PALETTE: deep bio-science feel ---
const C = {
  bg1: "04111D",       // near-black blue
  bg2: "081C2E",       // dark navy
  bg3: "0C2840",       // medium navy
  card: "112D4A",      // card bg on dark
  white: "FFFFFF",
  offWhite: "EDF2F7",
  cream: "F7FAFC",
  lightSlate: "CBD5E1",
  slate: "94A3B8",
  darkText: "1E293B",
  cyan: "22D3EE",      // punchy cyan
  teal: "14B8A6",      // teal green
  sky: "38BDF8",        // lighter blue
  emerald: "10B981",
  amber: "FBBF24",
  rose: "FB7185",
  violet: "A78BFA",
  orange: "FB923C",
  lime: "A3E635",
};

const IMG = path.join(__dirname, "papers", "images");
const W = 10, H = 5.625; // slide dims

// Helpers
const shadow = () => ({ type: "outer", blur: 10, offset: 3, angle: 135, color: "000000", opacity: 0.25 });
const softShadow = () => ({ type: "outer", blur: 6, offset: 2, angle: 135, color: "000000", opacity: 0.15 });

// Common footer
function footer(s, text) {
  s.addShape(pres.shapes.RECTANGLE, { x: 0, y: H - 0.28, w: W, h: 0.28, fill: { color: "000000", transparency: 50 } });
  s.addText(text || "Cancer-Targeting Peptides for Lung Cancer | Literature Survey 2014–2025", {
    x: 0.5, y: H - 0.28, w: 9, h: 0.28,
    fontSize: 7, fontFace: "Calibri", color: C.slate, valign: "middle", margin: 0,
  });
}

// =====================================================
// SLIDE 1: TITLE — cinematic, dark, big type
// =====================================================
{
  const s = pres.addSlide();
  s.background = { color: C.bg1 };
  // Decorative shapes — abstract DNA-like circles
  [[8.5, 0.3, 0.8], [9.0, 1.2, 0.5], [8.2, 1.5, 0.35], [9.3, 0.0, 0.6], [7.8, 0.7, 0.25]].forEach(([x, y, r]) => {
    s.addShape(pres.shapes.OVAL, { x, y, w: r, h: r, fill: { color: C.cyan, transparency: 85 } });
  });
  [[8.8, 3.5, 0.6], [9.4, 4.2, 0.4], [8.0, 4.0, 0.3]].forEach(([x, y, r]) => {
    s.addShape(pres.shapes.OVAL, { x, y, w: r, h: r, fill: { color: C.teal, transparency: 85 } });
  });
  // Thin accent line
  s.addShape(pres.shapes.LINE, { x: 0.8, y: 0.8, w: 0, h: 3.5, line: { color: C.cyan, width: 2 } });
  // Title
  s.addText("Cancer-Targeting\nPeptides for\nLung Cancer", {
    x: 1.2, y: 0.6, w: 7, h: 3.0,
    fontSize: 44, fontFace: "Georgia", color: C.white, bold: true,
    lineSpacingMultiple: 1.1, margin: 0,
  });
  // Year range — big accent
  s.addText("2014 – 2025", {
    x: 1.2, y: 3.5, w: 4, h: 0.7,
    fontSize: 28, fontFace: "Calibri Light", color: C.cyan, margin: 0,
  });
  // Subtitle
  s.addText("A literature survey of 19 papers tracing the evolution of\npeptide-based strategies for targeting, therapy, and drug delivery", {
    x: 1.2, y: 4.2, w: 6, h: 0.7,
    fontSize: 12, fontFace: "Calibri", color: C.slate, margin: 0,
  });
  s.addNotes("Good morning/afternoon. Today I'll be presenting a literature survey on cancer-targeting peptides for lung cancer — spanning a decade of research from 2014 to 2025.");
}

// =====================================================
// SLIDE 2: CONTENTS — numbered with colored dots
// =====================================================
{
  const s = pres.addSlide();
  s.background = { color: C.bg1 };
  s.addText("CONTENTS", {
    x: 0.8, y: 0.4, w: 3, h: 0.5,
    fontSize: 14, fontFace: "Calibri", color: C.cyan, charSpacing: 6, margin: 0,
  });
  s.addShape(pres.shapes.LINE, { x: 0.8, y: 0.95, w: 1.5, h: 0, line: { color: C.cyan, width: 1.5 } });

  const secs = [
    { t: "Peptide Discovery & Targeting", n: "6 papers", c: C.cyan },
    { t: "Anticancer Peptides with Direct Activity", n: "2 papers", c: C.teal },
    { t: "Peptide-Drug Conjugates & Delivery", n: "2 papers", c: C.sky },
    { t: "Nanoparticles & Delivery Platforms", n: "2 papers", c: C.emerald },
    { t: "Computational & AI-Driven Design", n: "2 papers", c: C.violet },
    { t: "Reviews & Landscape Papers", n: "5 papers", c: C.amber },
    { t: "Cross-Cutting Analysis", n: "Synthesis", c: C.rose },
  ];
  secs.forEach((sec, i) => {
    const y = 1.3 + i * 0.58;
    s.addShape(pres.shapes.OVAL, { x: 0.8, y: y + 0.08, w: 0.3, h: 0.3, fill: { color: sec.c } });
    s.addText(`0${i + 1}`, { x: 0.8, y: y + 0.08, w: 0.3, h: 0.3, fontSize: 10, fontFace: "Calibri", color: C.bg1, bold: true, align: "center", valign: "middle", margin: 0 });
    s.addText(sec.t, { x: 1.3, y: y, w: 6, h: 0.45, fontSize: 16, fontFace: "Calibri", color: C.white, margin: 0, valign: "middle" });
    s.addText(sec.n, { x: 7.8, y: y, w: 1.5, h: 0.45, fontSize: 11, fontFace: "Calibri", color: C.slate, align: "right", margin: 0, valign: "middle" });
  });
  footer(s);
  s.addNotes("Here's the roadmap. We'll move through seven sections covering discovery, direct activity, drug conjugates, nanoparticles, AI design, reviews, and cross-cutting analysis.");
}

// =====================================================
// SECTION INTRO SLIDE — dramatic number + title
// =====================================================
function sectionSlide(num, title, tagline, accentColor, notes) {
  const s = pres.addSlide();
  s.background = { color: C.bg2 };
  // Giant number
  s.addText(String(num).padStart(2, "0"), {
    x: 0.5, y: 0.2, w: 3, h: 3.5,
    fontSize: 120, fontFace: "Georgia", color: accentColor, bold: true, margin: 0,
    transparency: 20,
  });
  // Title
  s.addText(title, {
    x: 0.8, y: 2.0, w: 8, h: 1.5,
    fontSize: 36, fontFace: "Georgia", color: C.white, bold: true, margin: 0,
  });
  // Tagline
  s.addText(tagline, {
    x: 0.8, y: 3.7, w: 7, h: 0.6,
    fontSize: 13, fontFace: "Calibri", color: C.slate, margin: 0, italic: true,
  });
  // Accent bar
  s.addShape(pres.shapes.RECTANGLE, { x: 0.8, y: 3.5, w: 2.5, h: 0.04, fill: { color: accentColor } });
  footer(s);
  s.addNotes(notes);
}

// =====================================================
// PAPER SLIDE: IMAGE-DOMINANT (image fills left half)
// =====================================================
function paperSlideImgLeft(author, year, shortTitle, bullets, imgFile, caption, notes) {
  const s = pres.addSlide();
  s.background = { color: C.bg1 };
  // Image area — left half
  s.addImage({
    path: path.join(IMG, imgFile),
    x: 0, y: 0, w: 4.8, h: H,
    sizing: { type: "cover", w: 4.8, h: H },
  });
  // Gradient-like overlay on image (darker toward right edge)
  s.addShape(pres.shapes.RECTANGLE, { x: 3.5, y: 0, w: 1.8, h: H, fill: { color: C.bg1, transparency: 30 } });
  s.addShape(pres.shapes.RECTANGLE, { x: 4.2, y: 0, w: 1, h: H, fill: { color: C.bg1, transparency: 10 } });
  // Caption
  s.addShape(pres.shapes.RECTANGLE, { x: 0, y: H - 0.65, w: 4.8, h: 0.65, fill: { color: "000000", transparency: 40 } });
  s.addText(caption, { x: 0.2, y: H - 0.6, w: 4.4, h: 0.5, fontSize: 8, fontFace: "Calibri", color: C.lightSlate, margin: 0 });
  // Right side content
  s.addText(`${author} et al. (${year})`, {
    x: 5.2, y: 0.35, w: 4.5, h: 0.35,
    fontSize: 11, fontFace: "Calibri", color: C.cyan, bold: true, margin: 0,
  });
  s.addText(shortTitle, {
    x: 5.2, y: 0.7, w: 4.5, h: 0.7,
    fontSize: 20, fontFace: "Georgia", color: C.white, bold: true, margin: 0,
  });
  s.addShape(pres.shapes.LINE, { x: 5.2, y: 1.5, w: 1.5, h: 0, line: { color: C.cyan, width: 1.5 } });
  const items = bullets.map((b, i) => ({
    text: b, options: { bullet: { code: "2022" }, breakLine: i < bullets.length - 1, fontSize: 11, fontFace: "Calibri", color: C.lightSlate, paraSpaceBefore: 2, paraSpaceAfter: 4 },
  }));
  s.addText(items, { x: 5.2, y: 1.7, w: 4.5, h: 3.5, valign: "top", margin: 0 });
  footer(s, `${author} et al. (${year}) | Cancer-Targeting Peptides Literature Survey`);
  s.addNotes(notes);
}

// =====================================================
// PAPER SLIDE: IMAGE-DOMINANT (image fills right half)
// =====================================================
function paperSlideImgRight(author, year, shortTitle, bullets, imgFile, caption, notes) {
  const s = pres.addSlide();
  s.background = { color: C.bg1 };
  // Image area — right half
  s.addImage({
    path: path.join(IMG, imgFile),
    x: 5.2, y: 0, w: 4.8, h: H,
    sizing: { type: "cover", w: 4.8, h: H },
  });
  s.addShape(pres.shapes.RECTANGLE, { x: 5.2, y: 0, w: 1.5, h: H, fill: { color: C.bg1, transparency: 20 } });
  s.addShape(pres.shapes.RECTANGLE, { x: 5.2, y: H - 0.65, w: 4.8, h: 0.65, fill: { color: "000000", transparency: 40 } });
  s.addText(caption, { x: 5.4, y: H - 0.6, w: 4.4, h: 0.5, fontSize: 8, fontFace: "Calibri", color: C.lightSlate, margin: 0 });
  // Left content
  s.addText(`${author} et al. (${year})`, {
    x: 0.6, y: 0.35, w: 4.3, h: 0.35,
    fontSize: 11, fontFace: "Calibri", color: C.cyan, bold: true, margin: 0,
  });
  s.addText(shortTitle, {
    x: 0.6, y: 0.7, w: 4.3, h: 0.7,
    fontSize: 20, fontFace: "Georgia", color: C.white, bold: true, margin: 0,
  });
  s.addShape(pres.shapes.LINE, { x: 0.6, y: 1.5, w: 1.5, h: 0, line: { color: C.cyan, width: 1.5 } });
  const items = bullets.map((b, i) => ({
    text: b, options: { bullet: { code: "2022" }, breakLine: i < bullets.length - 1, fontSize: 11, fontFace: "Calibri", color: C.lightSlate, paraSpaceBefore: 2, paraSpaceAfter: 4 },
  }));
  s.addText(items, { x: 0.6, y: 1.7, w: 4.3, h: 3.5, valign: "top", margin: 0 });
  footer(s, `${author} et al. (${year}) | Cancer-Targeting Peptides Literature Survey`);
  s.addNotes(notes);
}

// =====================================================
// PAPER SLIDE: TWO IMAGES stacked with text overlay
// =====================================================
function paperSlide2Img(author, year, shortTitle, bullets, img1, cap1, img2, cap2, notes) {
  const s = pres.addSlide();
  s.background = { color: C.bg1 };
  // Two images — right column stacked
  s.addShape(pres.shapes.RECTANGLE, { x: 5.3, y: 0.3, w: 4.3, h: 2.4, fill: { color: C.card }, shadow: shadow() });
  s.addImage({ path: path.join(IMG, img1), x: 5.4, y: 0.4, w: 4.1, h: 1.9, sizing: { type: "contain", w: 4.1, h: 1.9 } });
  s.addText(cap1, { x: 5.4, y: 2.35, w: 4.1, h: 0.3, fontSize: 7, fontFace: "Calibri", color: C.slate, margin: 0 });

  s.addShape(pres.shapes.RECTANGLE, { x: 5.3, y: 2.85, w: 4.3, h: 2.4, fill: { color: C.card }, shadow: shadow() });
  s.addImage({ path: path.join(IMG, img2), x: 5.4, y: 2.95, w: 4.1, h: 1.9, sizing: { type: "contain", w: 4.1, h: 1.9 } });
  s.addText(cap2, { x: 5.4, y: 4.9, w: 4.1, h: 0.3, fontSize: 7, fontFace: "Calibri", color: C.slate, margin: 0 });

  // Left content
  s.addText(`${author} et al. (${year})`, {
    x: 0.6, y: 0.35, w: 4.5, h: 0.35,
    fontSize: 11, fontFace: "Calibri", color: C.cyan, bold: true, margin: 0,
  });
  s.addText(shortTitle, {
    x: 0.6, y: 0.7, w: 4.5, h: 0.7,
    fontSize: 20, fontFace: "Georgia", color: C.white, bold: true, margin: 0,
  });
  s.addShape(pres.shapes.LINE, { x: 0.6, y: 1.5, w: 1.5, h: 0, line: { color: C.cyan, width: 1.5 } });
  const items = bullets.map((b, i) => ({
    text: b, options: { bullet: { code: "2022" }, breakLine: i < bullets.length - 1, fontSize: 11, fontFace: "Calibri", color: C.lightSlate, paraSpaceBefore: 2, paraSpaceAfter: 4 },
  }));
  s.addText(items, { x: 0.6, y: 1.7, w: 4.5, h: 3.5, valign: "top", margin: 0 });
  footer(s, `${author} et al. (${year}) | Cancer-Targeting Peptides Literature Survey`);
  s.addNotes(notes);
}

// =====================================================
// PAPER SLIDE: TEXT ONLY with big stat callout
// =====================================================
function paperSlideText(author, year, shortTitle, bullets, statValue, statLabel, accentColor, notes) {
  const s = pres.addSlide();
  s.background = { color: C.bg1 };
  // Author
  s.addText(`${author} et al. (${year})`, {
    x: 0.6, y: 0.35, w: 5, h: 0.35,
    fontSize: 11, fontFace: "Calibri", color: C.cyan, bold: true, margin: 0,
  });
  s.addText(shortTitle, {
    x: 0.6, y: 0.7, w: 6, h: 0.7,
    fontSize: 22, fontFace: "Georgia", color: C.white, bold: true, margin: 0,
  });
  s.addShape(pres.shapes.LINE, { x: 0.6, y: 1.45, w: 1.5, h: 0, line: { color: accentColor || C.cyan, width: 1.5 } });
  // Bullets
  const items = bullets.map((b, i) => ({
    text: b, options: { bullet: { code: "2022" }, breakLine: i < bullets.length - 1, fontSize: 12, fontFace: "Calibri", color: C.lightSlate, paraSpaceBefore: 2, paraSpaceAfter: 6 },
  }));
  s.addText(items, { x: 0.6, y: 1.65, w: 5.8, h: 3.5, valign: "top", margin: 0 });
  // Big stat callout on the right
  if (statValue) {
    s.addShape(pres.shapes.RECTANGLE, { x: 7.0, y: 1.2, w: 2.6, h: 2.8, fill: { color: C.card }, shadow: shadow() });
    s.addShape(pres.shapes.RECTANGLE, { x: 7.0, y: 1.2, w: 2.6, h: 0.06, fill: { color: accentColor || C.cyan } });
    s.addText(statValue, {
      x: 7.0, y: 1.6, w: 2.6, h: 1.4,
      fontSize: 36, fontFace: "Georgia", color: accentColor || C.cyan, bold: true, align: "center", valign: "middle", margin: 0,
    });
    s.addText(statLabel, {
      x: 7.15, y: 3.1, w: 2.3, h: 0.7,
      fontSize: 10, fontFace: "Calibri", color: C.slate, align: "center", margin: 0,
    });
  }
  footer(s, `${author} et al. (${year}) | Cancer-Targeting Peptides Literature Survey`);
  s.addNotes(notes);
}


// =====================================================
// SLIDE 3: Section 1 — Peptide Discovery
// =====================================================
sectionSlide(1, "Peptide Discovery\n& Targeting", "How do we find peptides that specifically recognize lung cancer cells?", C.cyan,
  "Let's start with the foundation — how do we find peptides that specifically recognize and bind to lung cancer cells? The primary workhorse has been phage display biopanning.");

// =====================================================
// SLIDE 4: McGuire 2014
// =====================================================
paperSlideImgLeft("McGuire", "2014",
  "Tumor Targeting Peptides\nfor NSCLC",
  [
    "Phage display: 3 libraries (7-mer, 12-mer, C7C) on live NSCLC cells",
    "11 novel peptides with distinct binding profiles across 40 cell lines",
    "Tetramer KD as tight as 7 picomolar — binding correlates with EGFR/KRAS genotype",
    "In vivo tumor homing confirmed; validated on patient tumor samples",
    "Foundation paper — same group optimized MGS4 a decade later (Allred 2023)",
  ],
  "mcguire-2014-fig1-binding.jpg",
  "Binding profiles of NSCLC-targeting peptides across 40 cell lines (McGuire et al. 2014)",
  "The story starts in 2014 with McGuire at SRI International. They screened three phage display libraries and identified 11 novel peptides with binding affinities as tight as 7 picomolar."
);

// =====================================================
// SLIDE 5: Chi 2017
// =====================================================
paperSlide2Img("Chi", "2017",
  "Multi-Subtype Targeting\n& Theranostics",
  [
    "Phage display on H460 cells → HSP1, HSP2, HSP4",
    "Targets SCLC + NSCLC (4 subtypes) — rare in this field",
    "HSP4-liposomal dox: survival 131 vs 84 days (+47 d)",
    "Theranostic: MRI imaging with ~42% signal reduction",
    "Only orthotopic lung model in entire 19-paper survey",
  ],
  "chi-2017-fig3-mri.jpg", "MRI tumor imaging with HSP peptides (Chi 2017)",
  "chi-2017-fig8-survival.jpg", "Survival curves: 131 vs 84 days (Chi 2017)",
  "Chi et al. identified peptides that work across both SCLC and NSCLC. HSP4-liposomal doxorubicin extended survival by 47 days. They also demonstrated theranostic MRI imaging."
);

// =====================================================
// SLIDE 6: Bakhshinejad 2018
// =====================================================
paperSlideText("Bakhshinejad", "2018",
  "Novel Tumor-Binding\nPeptide LCP1",
  [
    "Ph.D.-7 phage display (7-mer library), 3 rounds on A549",
    "LCP1 (AWRTHTP) — 170-fold phage enrichment",
    "Selectivity index 5.1 over normal lung WI-38 cells",
    "No binding to liver, esophageal, or breast cancer",
    "In vitro only; receptor unknown; early-stage discovery",
  ],
  "5.1x", "Selectivity index\nA549 vs WI-38\nnormal lung cells", C.teal,
  "Bakhshinejad identified LCP1, a short 7-mer peptide with a selectivity index of 5.1 for A549 lung cancer over normal lung cells."
);

// =====================================================
// SLIDE 7: Furman 2022
// =====================================================
paperSlideImgRight("Furman", "2022",
  "Cyclic Peptides for\nEGFR / EGFRvIII",
  [
    "First to combine phage display + NGS: 617,503 sequences",
    "Cyclic peptides P6 (NSCLC) and P9 (glioblastoma)",
    "P9-camptothecin: 2-3x more cytotoxic than free drug",
    "Targets EGFR wild-type and EGFRvIII mutant",
    "Massive parallel screening replaces colony picking",
  ],
  "furman-2022-fig6-docking.jpg",
  "Molecular docking of cyclic peptides to EGFR (Furman 2022)",
  "Furman et al. combined phage display with next-generation sequencing — screening over 617,000 sequences. Their cyclic peptide P9 conjugated to camptothecin was 2-3x more cytotoxic than the free drug."
);

// =====================================================
// SLIDE 8: Zhou 2022
// =====================================================
paperSlideText("Zhou", "2022",
  "NKTP-3: Dual-Targeting\nCyclic D-Peptide",
  [
    "Structure-based computational design + virtual screening",
    "Cyclic D-peptide: protease-resistant, cell-permeable",
    "First dual-target: NRP1 (surface) + KRAS G12D (intracellular)",
    "Selective for G12D over wild-type, G12C, G12V",
    "Strong in vivo activity; no obvious toxicity",
    "Paradigm: simultaneous surface + intracellular targeting",
  ],
  "DUAL", "First peptide targeting\na surface receptor AND\nan intracellular oncoprotein", C.violet,
  "Zhou et al. achieved dual targeting — NKTP-3 binds NRP1 on the cell surface and targets intracellular KRAS G12D. First peptide to simultaneously target a surface receptor and intracellular oncoprotein."
);

// =====================================================
// SLIDE 9: Allred 2023
// =====================================================
paperSlideImgLeft("Allred", "2023",
  "Peptide-Guided Saporin\nDelivery to NSCLC",
  [
    "Continuation of McGuire 2014 — same group (SRI International)",
    "MGS4_V8 (Ac-FHAVPQSFYT): 10-aa monomer, N-terminal acetylation",
    "EC50 < 40 nM on 4 NSCLC lines",
    "With saporin toxin: IC50 9.4 nM",
    "In vivo: 25-40x tumor accumulation; ~50% tumor reduction",
    "Textbook iterative optimization over a decade",
  ],
  "allred-2023-fig5-tumor-homing.jpg",
  "240-fold tumor accumulation (NIR) & tumor growth inhibition (Allred 2023)",
  "Same group as McGuire 2014, nearly a decade later. Optimized to MGS4_V8 with IC50 9.4 nM with saporin. 25-40x tumor accumulation and 50% tumor reduction in vivo."
);

// =====================================================
// SLIDE 10: Section 2 — Anticancer Peptides
// =====================================================
sectionSlide(2, "Anticancer Peptides\nwith Direct Activity", "The peptide IS the drug — killing cancer through membrane disruption and apoptosis", C.teal,
  "Now let's shift from peptides that target to peptides that kill. These are anticancer peptides where the peptide itself is the therapeutic.");

// =====================================================
// SLIDE 11: Shin 2022
// =====================================================
paperSlideImgRight("Shin", "2022",
  "AC-P19M: AI-Designed\nAnticancer Peptide",
  [
    "AI tools: mACPpred, ACPred, ENNACT for de novo design",
    "AC-P19M: net charge +9, alpha-helical structure",
    "IC50 ~10-15 uM on A549/H460",
    "Zero toxicity at 100 uM in normal cells",
    "Multi-mechanism: apoptosis + membrane disruption + VEGFR2 suppression + anti-EMT",
  ],
  "shin-2022-fig1-design.jpg",
  "De novo design pipeline with AI prediction (Shin 2022)",
  "Shin et al. used AI to design a peptide from scratch. AC-P19M kills lung cancer cells at 10-15 micromolar with zero toxicity to normal cells up to 100 micromolar. Remarkable multi-mechanism activity."
);

// =====================================================
// SLIDE 12: Yang 2022
// =====================================================
paperSlide2Img("Yang", "2022",
  "K4F6K4: Elegant Simplicity\nin Peptide Design",
  [
    "Rational triblock: KKKK-FFFFFF-KKKK — just 14 residues",
    "Cationic blocks + hydrophobic core = selective membrane disruption",
    "81.6% tumor volume reduction at Day 28 in vivo",
    "12.9x selectivity over normal MRC-5 fibroblasts",
    "Fundamentally different from receptor-based targeting",
  ],
  "yang-2022-fig7-tumor-reduction.jpg", "81.6% tumor reduction in BALB/c nude mice (Yang 2022)",
  "yang-2022-fig8-mechanism.jpg", "Amphiphilic self-assembly and membrane disruption (Yang 2022)",
  "Yang et al. designed a simple 14-residue triblock peptide. In vivo, 81.6% tumor volume reduction with 12.9-fold selectivity. The simplicity is the point."
);

// =====================================================
// SLIDE 13: Section 3 — PDCs
// =====================================================
sectionSlide(3, "Peptide-Drug Conjugates\n& Delivery", "Guided missiles: peptides delivering cytotoxic payloads at a fraction of antibody size", C.sky,
  "Peptide-drug conjugates — the peptide equivalent of antibody-drug conjugates, but at a fraction of the size.");

// =====================================================
// SLIDE 14: Mudd 2022 — BT8009 (the star)
// =====================================================
paperSlide2Img("Mudd", "2022",
  "BT8009: From Bench\nto Bedside",
  [
    "Bicycle peptide (~4 kDa) + TATA scaffold + MMAE cytotoxin",
    "KD 2.8 nM — antibody-like affinity at 1/30th the size",
    "Near-complete tumor regression by Day 18",
    "Phase I/II clinical trial — most advanced in survey",
    "First-in-class bicycle toxin conjugate for Nectin-4",
  ],
  "mudd-2022-fig3-bt8009-structure.jpg", "BT8009 structure: bicycle peptide + linker + MMAE (Mudd 2022)",
  "mudd-2022-fig4-efficacy.jpg", "Near-complete tumor regression in xenograft (Mudd 2022)",
  "BT8009 is the star of this survey. At 4 kilodaltons it achieves antibody-like affinity. Near-complete tumor regression. And it's in Phase I/II clinical trials."
);

// =====================================================
// SLIDE 15: Singh 2025 — ORAL! (paradigm shift slide)
// =====================================================
{
  const s = pres.addSlide();
  s.background = { color: C.bg1 };
  // Big paradigm-shift callout
  s.addShape(pres.shapes.RECTANGLE, { x: 0.5, y: 0.3, w: 9, h: 2.0, fill: { color: C.card }, shadow: shadow() });
  s.addShape(pres.shapes.RECTANGLE, { x: 0.5, y: 0.3, w: 9, h: 0.06, fill: { color: C.emerald } });
  s.addText("PARADIGM SHIFT", {
    x: 0.8, y: 0.5, w: 3, h: 0.35,
    fontSize: 11, fontFace: "Calibri", color: C.emerald, charSpacing: 4, bold: true, margin: 0,
  });
  s.addText("First Oral Anticancer Peptide", {
    x: 0.8, y: 0.9, w: 8.4, h: 0.6,
    fontSize: 28, fontFace: "Georgia", color: C.white, bold: true, margin: 0,
  });
  s.addText("Singh et al. (2025) — SFTI-G5 targets EGFR/HER2 and can be taken as a pill", {
    x: 0.8, y: 1.5, w: 8.4, h: 0.5,
    fontSize: 13, fontFace: "Calibri", color: C.lightSlate, margin: 0,
  });

  // Three stat cards
  const stats = [
    { val: "73 nM", label: "IC50 on\nCalu-3 NSCLC", c: C.cyan },
    { val: ">500x", label: "Selectivity over\nnormal cells", c: C.emerald },
    { val: "ORAL", label: "Bioavailability\nconfirmed in vivo", c: C.amber },
  ];
  stats.forEach((st, i) => {
    const x = 0.5 + i * 3.1;
    s.addShape(pres.shapes.RECTANGLE, { x, y: 2.7, w: 2.8, h: 2.4, fill: { color: C.card }, shadow: softShadow() });
    s.addShape(pres.shapes.RECTANGLE, { x, y: 2.7, w: 2.8, h: 0.05, fill: { color: st.c } });
    s.addText(st.val, { x, y: 3.0, w: 2.8, h: 1.0, fontSize: 32, fontFace: "Georgia", color: st.c, bold: true, align: "center", valign: "middle", margin: 0 });
    s.addText(st.label, { x: x + 0.2, y: 4.1, w: 2.4, h: 0.7, fontSize: 10, fontFace: "Calibri", color: C.slate, align: "center", margin: 0 });
  });
  footer(s, "Singh et al. (2025) | Cancer-Targeting Peptides Literature Survey");
  s.addNotes("Singh et al. achieved the biggest paradigm shift — SFTI-G5, an oral anticancer peptide. IC50 73 nM, >500-fold selectivity, and confirmed oral bioavailability.");
}

// =====================================================
// SLIDE 16: Section 4 — Nanoparticles
// =====================================================
sectionSlide(4, "Nanoparticles &\nDelivery Platforms", "Peptide-functionalized nanocarriers for enhanced lung tumor delivery", C.emerald,
  "How peptides are being integrated into nanocarrier systems for enhanced delivery to lung tumors.");

// =====================================================
// SLIDE 17: Kim 2024
// =====================================================
paperSlideText("Kim & Park", "2024",
  "Functionalized Peptides\nin Nanomedicine",
  [
    "Three strategies: targeting ligands, self-assembly, stimuli-responsive",
    "Lung highlight: CPP33 + ZIF-90 MOF + survivin siRNA + Oridonin",
    "Dual-payload: gene therapy + chemotherapy in one nanoparticle",
    "Preferential A549 uptake and tumor reduction in vivo",
    "Platforms: MOFs, gold NPs, mesoporous silica, liposomes, polymeric NPs",
  ],
  "3-in-1", "CPP33 + siRNA +\nOridonin in a single\nnanoparticle system", C.emerald,
  "Kim and Park reviewed three peptide-NP strategies. The lung highlight was CPP33 on a ZIF-90 framework carrying both siRNA and Oridonin."
);

// =====================================================
// SLIDE 18: Lee 2025
// =====================================================
paperSlideText("Lee", "2025",
  "Engineered Nanocarriers\nfor Lung Cancer",
  [
    "Comprehensive: liposomes, PLGA, dendrimers, exosomes, inorganic NPs",
    "T-DXd: ~55% response in HER2-mutant NSCLC (approved)",
    "Emerging: inhalable NP systems for direct pulmonary deposition",
    "Stimuli-responsive: pH, enzyme, hypoxia-triggered release",
    "Inhalable delivery bypasses systemic circulation entirely",
  ],
  "~55%", "T-DXd response rate\nin HER2-mutant\nNSCLC (approved)", C.sky,
  "Lee et al. provided the most comprehensive nanocarrier review. The emerging trend: inhalable nanoparticle systems that bypass systemic circulation for lung-specific targeting."
);

// =====================================================
// SLIDE 19: Section 5 — Computational/AI
// =====================================================
sectionSlide(5, "Computational &\nAI-Driven Design", "How AI and machine learning are reshaping peptide discovery", C.violet,
  "The computational revolution — how AI and machine learning are reshaping peptide design and discovery.");

// =====================================================
// SLIDE 20: Wu 2025 — 68 models but zero clinical validation
// =====================================================
{
  const s = pres.addSlide();
  s.background = { color: C.bg1 };
  s.addText("Wu et al. (2025)", { x: 0.6, y: 0.35, w: 4, h: 0.35, fontSize: 11, fontFace: "Calibri", color: C.cyan, bold: true, margin: 0 });
  s.addText("AI-Driven Anticancer\nPeptide Discovery", {
    x: 0.6, y: 0.7, w: 5, h: 0.8,
    fontSize: 22, fontFace: "Georgia", color: C.white, bold: true, margin: 0,
  });
  s.addShape(pres.shapes.LINE, { x: 0.6, y: 1.55, w: 1.5, h: 0, line: { color: C.violet, width: 1.5 } });

  // Big numbers row
  const nums = [
    { val: "68", label: "AI prediction\nmodels reviewed", c: C.violet },
    { val: "7+", label: "Model types: SVM,\nRF, CNN, LSTM,\nTransformer, LLM", c: C.sky },
    { val: "0", label: "AI-discovered ACPs\nin clinical trials", c: C.rose },
  ];
  nums.forEach((n, i) => {
    const x = 0.5 + i * 3.1;
    s.addShape(pres.shapes.RECTANGLE, { x, y: 1.9, w: 2.8, h: 2.2, fill: { color: C.card }, shadow: softShadow() });
    s.addText(n.val, { x, y: 2.1, w: 2.8, h: 1.0, fontSize: 48, fontFace: "Georgia", color: n.c, bold: true, align: "center", valign: "middle", margin: 0 });
    s.addText(n.label, { x: x + 0.2, y: 3.15, w: 2.4, h: 0.8, fontSize: 10, fontFace: "Calibri", color: C.slate, align: "center", margin: 0 });
  });

  // Bottom insight
  s.addShape(pres.shapes.RECTANGLE, { x: 0.5, y: 4.35, w: 9, h: 0.9, fill: { color: C.card } });
  s.addShape(pres.shapes.RECTANGLE, { x: 0.5, y: 4.35, w: 0.06, h: 0.9, fill: { color: C.rose } });
  s.addText("The AI hype is real, but the validation gap is equally real. Most models lack wet-lab confirmation.", {
    x: 0.8, y: 4.35, w: 8.5, h: 0.9,
    fontSize: 13, fontFace: "Calibri", color: C.lightSlate, valign: "middle", italic: true, margin: 0,
  });
  footer(s, "Wu et al. (2025) | Cancer-Targeting Peptides Literature Survey");
  s.addNotes("Wu et al. reviewed 68 AI models. The critical gap: most lack experimental validation. No AI-discovered ACP has reached clinical trials. The hype is real but so is the validation gap.");
}

// =====================================================
// SLIDE 21: Chowdhury 2025
// =====================================================
paperSlideText("Chowdhury", "2025",
  "Molecular Chimera:\nGrafted Stable Peptides",
  [
    "Plant scaffolds (cyclotides, SFTI-1) grafted with cancer epitopes",
    "Cyclotides: 28-37 aa, cyclic cystine knot, 3 disulfide bonds",
    "SFTI-1: 14 aa bicyclic — the scaffold behind Singh's SFTI-G5",
    "Targets: EGFR, HER2, PD-L1, VEGF, integrins, p53-HDM2",
    "Same group (Jois lab, LSU) as Singh 2025 — theory meets practice",
  ],
  "ORAL", "Scaffold stability\nenables oral delivery\n— validated by SFTI-G5", C.emerald,
  "Chowdhury et al. provide the theoretical framework behind Singh's SFTI-G5. Molecular chimeras: plant scaffolds grafted with cancer-targeting epitopes. This is the blueprint for next-gen orally available peptide therapeutics."
);

// =====================================================
// SLIDE 22: Section 6 — Reviews
// =====================================================
sectionSlide(6, "Reviews &\nLandscape Papers", "Five reviews providing the broader context for the field", C.amber,
  "Section 6 covers five review papers that provide the broader context for everything we've discussed.");

// =====================================================
// SLIDE 23: Karankar 2025
// =====================================================
paperSlideText("Karankar", "2025",
  "Peptide-Driven Strategies\nAgainst Lung Cancer",
  [
    "Maps peptides against 6 driver mutations: EGFR, TP53, BRAF, MET, ROS1, ALK",
    "Key peptides: GE11 (EGFR), p28 (p53), NKTP-3 (KRAS G12D)",
    "Peptides as bridge between small-molecule TKIs and antibodies",
    "Potential for TKI-resistant tumors — growing clinical need",
    "Gap: zero peptides targeting ALK, ROS1, or MET fusions",
  ],
  "0", "Experimental peptides\ntargeting ALK, ROS1,\nor MET fusions", C.rose,
  "Karankar et al. mapped peptides against six NSCLC driver mutations. Key insight: peptides bridge TKIs and antibodies. But zero peptides target ALK, ROS1, or MET fusions."
);

// =====================================================
// SLIDE 24: Karati + Nhan — side-by-side cards
// =====================================================
{
  const s = pres.addSlide();
  s.background = { color: C.bg1 };

  // Left card — Karati
  s.addShape(pres.shapes.RECTANGLE, { x: 0.3, y: 0.3, w: 4.5, h: 4.7, fill: { color: C.card }, shadow: shadow() });
  s.addShape(pres.shapes.RECTANGLE, { x: 0.3, y: 0.3, w: 4.5, h: 0.06, fill: { color: C.amber } });
  s.addText("Karati et al. (2025)", { x: 0.6, y: 0.55, w: 4, h: 0.3, fontSize: 11, fontFace: "Calibri", color: C.amber, bold: true, margin: 0 });
  s.addText("Peptide Drugs &\nChemoresistance", { x: 0.6, y: 0.9, w: 4, h: 0.7, fontSize: 18, fontFace: "Georgia", color: C.white, bold: true, margin: 0 });
  s.addShape(pres.shapes.LINE, { x: 0.6, y: 1.7, w: 1.2, h: 0, line: { color: C.amber, width: 1 } });
  s.addText([
    { text: "ACPs bypass P-glycoprotein efflux via membrane disruption", options: { bullet: { code: "2022" }, breakLine: true, fontSize: 11, color: C.lightSlate } },
    { text: "Fundamentally different mechanism from conventional drugs", options: { bullet: { code: "2022" }, breakLine: true, fontSize: 11, color: C.lightSlate } },
    { text: "Targets DNA repair, EMT, apoptosis evasion simultaneously", options: { bullet: { code: "2022" }, breakLine: true, fontSize: 11, color: C.lightSlate } },
    { text: "Challenge: short half-life remains primary limitation", options: { bullet: { code: "2022" }, fontSize: 11, color: C.lightSlate } },
  ], { x: 0.6, y: 1.9, w: 3.9, h: 2.8, paraSpaceAfter: 6, valign: "top", margin: 0 });

  // Right card — Nhan
  s.addShape(pres.shapes.RECTANGLE, { x: 5.2, y: 0.3, w: 4.5, h: 4.7, fill: { color: C.card }, shadow: shadow() });
  s.addShape(pres.shapes.RECTANGLE, { x: 5.2, y: 0.3, w: 4.5, h: 0.06, fill: { color: C.sky } });
  s.addText("Nhan et al. (2023)", { x: 5.5, y: 0.55, w: 4, h: 0.3, fontSize: 11, fontFace: "Calibri", color: C.sky, bold: true, margin: 0 });
  s.addText("Peptide-Based Agents\nfor Cancer Treatment", { x: 5.5, y: 0.9, w: 4, h: 0.7, fontSize: 18, fontFace: "Georgia", color: C.white, bold: true, margin: 0 });
  s.addShape(pres.shapes.LINE, { x: 5.5, y: 1.7, w: 1.2, h: 0, line: { color: C.sky, width: 1 } });
  s.addText([
    { text: "Broadest scope: 56 pre-clinical + 10 clinical-stage peptides", options: { bullet: { code: "2022" }, breakLine: true, fontSize: 11, color: C.lightSlate } },
    { text: "Clinical: LUNA18 (KRAS), p28 (p53), ALRN-6924", options: { bullet: { code: "2022" }, breakLine: true, fontSize: 11, color: C.lightSlate } },
    { text: "Lung: NKTP-3, KRpep-2d, 99mTc-3PRGD2 imaging", options: { bullet: { code: "2022" }, breakLine: true, fontSize: 11, color: C.lightSlate } },
    { text: "FDA history: Leuprorelin (1985) → Carfilzomib (2012)", options: { bullet: { code: "2022" }, fontSize: 11, color: C.lightSlate } },
  ], { x: 5.5, y: 1.9, w: 3.9, h: 2.8, paraSpaceAfter: 6, valign: "top", margin: 0 });

  footer(s);
  s.addNotes("Karati: ACPs bypass P-glycoprotein efflux through membrane disruption. Nhan: broadest scope — 56 pre-clinical and 10 clinical-stage peptides.");
}

// =====================================================
// SLIDE 25: Alamdari + Bauso — side-by-side
// =====================================================
{
  const s = pres.addSlide();
  s.background = { color: C.bg1 };

  // Left card
  s.addShape(pres.shapes.RECTANGLE, { x: 0.3, y: 0.3, w: 4.5, h: 4.7, fill: { color: C.card }, shadow: shadow() });
  s.addShape(pres.shapes.RECTANGLE, { x: 0.3, y: 0.3, w: 4.5, h: 0.06, fill: { color: C.teal } });
  s.addText("Alamdari-palangi et al. (2023)", { x: 0.6, y: 0.55, w: 4, h: 0.3, fontSize: 11, fontFace: "Calibri", color: C.teal, bold: true, margin: 0 });
  s.addText("Peptide-Agent\nConjugates", { x: 0.6, y: 0.9, w: 4, h: 0.7, fontSize: 18, fontFace: "Georgia", color: C.white, bold: true, margin: 0 });
  s.addShape(pres.shapes.LINE, { x: 0.6, y: 1.7, w: 1.2, h: 0, line: { color: C.teal, width: 1 } });
  s.addText([
    { text: "PDC landscape: design principles & linker chemistry", options: { bullet: { code: "2022" }, breakLine: true, fontSize: 11, color: C.lightSlate } },
    { text: "28 clinical trials cataloged", options: { bullet: { code: "2022" }, breakLine: true, fontSize: 11, color: C.lightSlate } },
    { text: "60+ approved peptide therapeutics; 12 FDA/EMA cancer drugs", options: { bullet: { code: "2022" }, breakLine: true, fontSize: 11, color: C.lightSlate } },
    { text: "BT8009 featured as key next-gen design", options: { bullet: { code: "2022" }, fontSize: 11, color: C.lightSlate } },
  ], { x: 0.6, y: 1.9, w: 3.9, h: 2.8, paraSpaceAfter: 6, valign: "top", margin: 0 });

  // Right card
  s.addShape(pres.shapes.RECTANGLE, { x: 5.2, y: 0.3, w: 4.5, h: 4.7, fill: { color: C.card }, shadow: shadow() });
  s.addShape(pres.shapes.RECTANGLE, { x: 5.2, y: 0.3, w: 4.5, h: 0.06, fill: { color: C.orange } });
  s.addText("Bauso et al. (2024)", { x: 5.5, y: 0.55, w: 4, h: 0.3, fontSize: 11, fontFace: "Calibri", color: C.orange, bold: true, margin: 0 });
  s.addText("Natural & Synthetic\nAnticancer Peptides", { x: 5.5, y: 0.9, w: 4, h: 0.7, fontSize: 18, fontFace: "Georgia", color: C.white, bold: true, margin: 0 });
  s.addShape(pres.shapes.LINE, { x: 5.5, y: 1.7, w: 1.2, h: 0, line: { color: C.orange, width: 1 } });
  s.addText([
    { text: "ACPs across 10 cancer types; 7 lung peptides cataloged", options: { bullet: { code: "2022" }, breakLine: true, fontSize: 11, color: C.lightSlate } },
    { text: "MANS, FCHO1, TMEM39AS41, MP06, AC-P19M, DTX-P7", options: { bullet: { code: "2022" }, breakLine: true, fontSize: 11, color: C.lightSlate } },
    { text: ">1,000 clinical trials using ACPs globally", options: { bullet: { code: "2022" }, breakLine: true, fontSize: 11, color: C.lightSlate } },
    { text: "AC-P19M: 5x more toxic to cancer vs normal cells", options: { bullet: { code: "2022" }, fontSize: 11, color: C.lightSlate } },
  ], { x: 5.5, y: 1.9, w: 3.9, h: 2.8, paraSpaceAfter: 6, valign: "top", margin: 0 });

  footer(s);
  s.addNotes("Alamdari-palangi: 28 clinical trials of PDCs. Bauso: 7 lung cancer peptides cataloged, >1000 ACP clinical trials globally.");
}

// =====================================================
// SLIDE 26: Section 7 — Cross-Cutting
// =====================================================
sectionSlide(7, "Cross-Cutting\nAnalysis", "Patterns, gaps, and opportunities across all 19 papers", C.rose,
  "Now let's step back and look at the patterns across all 19 papers.");

// =====================================================
// SLIDE 27: Method Evolution — timeline
// =====================================================
{
  const s = pres.addSlide();
  s.background = { color: C.bg1 };
  s.addText("Method Evolution", {
    x: 0.6, y: 0.3, w: 5, h: 0.6,
    fontSize: 24, fontFace: "Georgia", color: C.white, bold: true, margin: 0,
  });
  s.addText("2014 → 2025", {
    x: 5.5, y: 0.3, w: 4, h: 0.6,
    fontSize: 18, fontFace: "Calibri Light", color: C.slate, align: "right", margin: 0,
  });

  // Timeline line
  s.addShape(pres.shapes.LINE, { x: 1.2, y: 1.2, w: 0, h: 3.6, line: { color: C.slate, width: 1, dashType: "dash" } });

  const eras = [
    { y: 1.2, era: "Phage Display", years: "2014–2018", desc: "Cell-based biopanning, iterative selection", papers: "McGuire, Chi, Bakhshinejad", c: C.cyan },
    { y: 1.9, era: "NGS + Computation", years: "2022", desc: "Phage display + sequencing; virtual screening", papers: "Furman, Zhou", c: C.teal },
    { y: 2.6, era: "De Novo AI Design", years: "2022", desc: "AI-predicted sequences; rational amphiphilic design", papers: "Shin, Yang", c: C.sky },
    { y: 3.3, era: "Scaffold Engineering", years: "2025", desc: "Plant scaffolds grafted with targeting epitopes", papers: "Singh, Chowdhury", c: C.emerald },
    { y: 4.0, era: "AI/ML at Scale", years: "2025", desc: "68 models; language models; end-to-end frameworks", papers: "Wu", c: C.violet },
  ];

  eras.forEach(e => {
    // Dot on timeline
    s.addShape(pres.shapes.OVAL, { x: 1.0, y: e.y + 0.15, w: 0.4, h: 0.4, fill: { color: e.c } });
    // Era card
    s.addShape(pres.shapes.RECTANGLE, { x: 1.8, y: e.y, w: 7.6, h: 0.6, fill: { color: C.card } });
    s.addShape(pres.shapes.RECTANGLE, { x: 1.8, y: e.y, w: 0.06, h: 0.6, fill: { color: e.c } });
    s.addText(e.era, { x: 2.1, y: e.y, w: 2, h: 0.35, fontSize: 12, fontFace: "Calibri", color: C.white, bold: true, margin: 0 });
    s.addText(e.years, { x: 2.1, y: e.y + 0.3, w: 2, h: 0.25, fontSize: 9, fontFace: "Calibri", color: C.slate, margin: 0 });
    s.addText(e.desc, { x: 4.2, y: e.y, w: 3.2, h: 0.6, fontSize: 10, fontFace: "Calibri", color: C.lightSlate, valign: "middle", margin: 0 });
    s.addText(e.papers, { x: 7.5, y: e.y, w: 1.8, h: 0.6, fontSize: 10, fontFace: "Calibri", color: e.c, valign: "middle", align: "right", margin: 0 });
  });

  // Bottom arrow
  s.addText("Empirical screening  →  Rational, computationally guided design", {
    x: 1.8, y: 4.8, w: 7.6, h: 0.4,
    fontSize: 11, fontFace: "Calibri", color: C.cyan, italic: true, align: "center", margin: 0,
  });
  footer(s);
  s.addNotes("The field evolved from classic phage display to NGS-enhanced screening, de novo AI design, scaffold engineering, and large-scale AI models. Clear trajectory toward rational, computationally guided design.");
}

// =====================================================
// SLIDE 28: Target Landscape
// =====================================================
{
  const s = pres.addSlide();
  s.background = { color: C.bg1 };
  s.addText("Target Landscape", {
    x: 0.6, y: 0.3, w: 5, h: 0.6,
    fontSize: 24, fontFace: "Georgia", color: C.white, bold: true, margin: 0,
  });

  const hdr = [
    { text: "Target", options: { fill: { color: C.bg3 }, color: C.cyan, bold: true, fontSize: 11, fontFace: "Calibri" } },
    { text: "Papers", options: { fill: { color: C.bg3 }, color: C.cyan, bold: true, fontSize: 11, fontFace: "Calibri", align: "center" } },
    { text: "Most Advanced", options: { fill: { color: C.bg3 }, color: C.cyan, bold: true, fontSize: 11, fontFace: "Calibri" } },
    { text: "Stage", options: { fill: { color: C.bg3 }, color: C.cyan, bold: true, fontSize: 11, fontFace: "Calibri", align: "center" } },
  ];
  const rows = [
    ["EGFR / HER2", "8", "SFTI-G5 (oral, 73 nM)", "Pre-clinical"],
    ["Nectin-4", "2", "BT8009-MMAE", "Phase I/II"],
    ["KRAS G12D", "4", "NKTP-3, LUNA18", "Phase I/II"],
    ["p53 / HDM2", "2", "p28 (azurin)", "Phase I"],
    ["PD-1 / PD-L1", "3", "Cyclotide grafts", "Early research"],
    ["KRAS G12C", "0", "—", "GAP"],
    ["ALK / ROS1 / MET", "0", "—", "GAP"],
  ].map(row => row.map((cell, ci) => ({
    text: cell,
    options: {
      fontSize: 11, fontFace: "Calibri",
      color: row[3] === "GAP" ? C.rose : C.lightSlate,
      bold: row[3] === "GAP",
      align: ci === 1 || ci === 3 ? "center" : "left",
      fill: { color: row[3] === "GAP" ? "1A1020" : C.card },
    },
  })));

  s.addTable([hdr, ...rows], {
    x: 0.5, y: 1.1, w: 9,
    colW: [2.2, 0.9, 3.2, 2.7],
    border: { pt: 0.5, color: C.bg3 },
    rowH: [0.4, 0.42, 0.42, 0.42, 0.42, 0.42, 0.42, 0.42],
  });

  s.addShape(pres.shapes.RECTANGLE, { x: 0.5, y: 4.6, w: 9, h: 0.6, fill: { color: C.card } });
  s.addShape(pres.shapes.RECTANGLE, { x: 0.5, y: 4.6, w: 0.06, h: 0.6, fill: { color: C.rose } });
  s.addText("KRAS G12C (most common in smokers) and ALK/ROS1/MET fusions = significant unmet needs with zero peptides", {
    x: 0.8, y: 4.6, w: 8.5, h: 0.6,
    fontSize: 11, fontFace: "Calibri", color: C.rose, italic: true, valign: "middle", margin: 0,
  });
  footer(s);
  s.addNotes("EGFR/HER2 appears in 8 papers. BT8009 targets Nectin-4 in Phase I/II. Critical gaps: zero peptides for KRAS G12C and ALK/ROS1/MET fusions.");
}

// =====================================================
// SLIDE 29: Efficacy — big stat callouts
// =====================================================
{
  const s = pres.addSlide();
  s.background = { color: C.bg1 };
  s.addText("Top Performers", {
    x: 0.6, y: 0.3, w: 5, h: 0.6,
    fontSize: 24, fontFace: "Georgia", color: C.white, bold: true, margin: 0,
  });
  s.addText("Quantitative Efficacy Across the Survey", {
    x: 0.6, y: 0.75, w: 5, h: 0.3,
    fontSize: 12, fontFace: "Calibri", color: C.slate, margin: 0,
  });

  const stats = [
    { val: "7 pM", label: "Best Binding\nMcGuire tetramers", c: C.cyan },
    { val: "9.4 nM", label: "Best IC50\nMGS4_V8-saporin", c: C.teal },
    { val: "73 nM", label: "Best Free Peptide\nSFTI-G5", c: C.sky },
    { val: "-81.6%", label: "Tumor Reduction\nK4F6K4 (Day 28)", c: C.emerald },
    { val: "+47 d", label: "Survival Extension\nHSP4-PLD", c: C.amber },
    { val: ">500x", label: "Selectivity\nSFTI-G5", c: C.violet },
  ];

  stats.forEach((st, i) => {
    const col = i % 3;
    const row = Math.floor(i / 3);
    const x = 0.5 + col * 3.1;
    const y = 1.3 + row * 2.0;
    s.addShape(pres.shapes.RECTANGLE, { x, y, w: 2.8, h: 1.7, fill: { color: C.card }, shadow: softShadow() });
    s.addShape(pres.shapes.RECTANGLE, { x, y, w: 2.8, h: 0.05, fill: { color: st.c } });
    s.addText(st.val, { x, y: y + 0.2, w: 2.8, h: 0.8, fontSize: 30, fontFace: "Georgia", color: st.c, bold: true, align: "center", valign: "middle", margin: 0 });
    s.addText(st.label, { x: x + 0.2, y: y + 1.05, w: 2.4, h: 0.5, fontSize: 9, fontFace: "Calibri", color: C.slate, align: "center", margin: 0 });
  });
  footer(s);
  s.addNotes("Headline numbers: 7 picomolar binding, 9.4 nM cytotoxicity, 81.6% tumor reduction, 47-day survival extension, >500-fold selectivity. Numbers that rival antibody-drug conjugates.");
}

// =====================================================
// SLIDE 30: Clinical Pipeline — funnel
// =====================================================
{
  const s = pres.addSlide();
  s.background = { color: C.bg1 };
  s.addText("Clinical Translation Pipeline", {
    x: 0.6, y: 0.3, w: 6, h: 0.6,
    fontSize: 24, fontFace: "Georgia", color: C.white, bold: true, margin: 0,
  });

  const stages = [
    { stage: "Discovery / In Vitro", compounds: "LCP1, AC-P19M, P6/P9", papers: "3 papers", barW: 8.5, c: C.slate },
    { stage: "In Vivo Xenograft", compounds: "HSP4, K4F6K4, NKTP-3, MGS4_V8, SFTI-G5", papers: "6 papers", barW: 6.0, c: C.teal },
    { stage: "Clinical Trials", compounds: "BT8009 (Phase I/II)", papers: "1 paper", barW: 2.0, c: C.emerald },
    { stage: "AI / Computational", compounds: "68 models → 0 clinical validation", papers: "1 paper", barW: 1.0, c: C.violet },
  ];

  stages.forEach((st, i) => {
    const y = 1.2 + i * 1.0;
    // Background bar
    s.addShape(pres.shapes.RECTANGLE, { x: 0.7, y, w: 8.5, h: 0.7, fill: { color: C.card } });
    // Fill bar
    s.addShape(pres.shapes.RECTANGLE, { x: 0.7, y, w: st.barW, h: 0.7, fill: { color: st.c, transparency: 60 } });
    s.addShape(pres.shapes.RECTANGLE, { x: 0.7, y, w: st.barW, h: 0.05, fill: { color: st.c } });
    // Labels
    s.addText(st.stage, { x: 0.9, y, w: 2.5, h: 0.35, fontSize: 12, fontFace: "Calibri", color: C.white, bold: true, margin: 0 });
    s.addText(st.compounds, { x: 0.9, y: y + 0.32, w: 5, h: 0.3, fontSize: 10, fontFace: "Calibri", color: C.lightSlate, margin: 0 });
    s.addText(st.papers, { x: 7.5, y, w: 1.5, h: 0.7, fontSize: 10, fontFace: "Calibri", color: C.slate, align: "right", valign: "middle", margin: 0 });
  });

  // Insight
  s.addShape(pres.shapes.RECTANGLE, { x: 0.5, y: 4.6, w: 9, h: 0.6, fill: { color: C.card } });
  s.addShape(pres.shapes.RECTANGLE, { x: 0.5, y: 4.6, w: 0.06, h: 0.6, fill: { color: C.rose } });
  s.addText("Pipeline is heavily front-loaded — discovery is outpacing clinical translation", {
    x: 0.8, y: 4.6, w: 8.5, h: 0.6,
    fontSize: 12, fontFace: "Calibri", color: C.rose, italic: true, valign: "middle", margin: 0,
  });
  footer(s);
  s.addNotes("Most papers remain at discovery. Six have in vivo data. Only BT8009 reached clinical trials. AI has 68 models but zero clinical validation. Discovery outpaces translation.");
}

// =====================================================
// SLIDE 31: Key Gaps — red accent
// =====================================================
{
  const s = pres.addSlide();
  s.background = { color: C.bg1 };
  s.addText("Key Gaps", {
    x: 0.6, y: 0.3, w: 3, h: 0.6,
    fontSize: 24, fontFace: "Georgia", color: C.white, bold: true, margin: 0,
  });
  s.addText("in the Field", {
    x: 2.5, y: 0.3, w: 3, h: 0.6,
    fontSize: 24, fontFace: "Georgia", color: C.rose, bold: true, margin: 0,
  });

  const gaps = [
    { gap: "KRAS G12C", desc: "Most common KRAS mutation in NSCLC smokers — zero peptides" },
    { gap: "SCLC", desc: "Only Chi 2017 addresses it; aggressive, no targeted therapies" },
    { gap: "ALK / ROS1 / MET", desc: "Mentioned in reviews but zero experimental peptides" },
    { gap: "Orthotopic Models", desc: "Only 1 of 19 papers uses lung-specific tumor model" },
    { gap: "Head-to-Head", desc: "No comparison with standard-of-care antibodies or TKIs" },
    { gap: "AI Validation", desc: "68 models, most without wet-lab confirmation" },
    { gap: "Immunotherapy", desc: "No studies combining peptides with checkpoint inhibitors" },
  ];

  gaps.forEach((g, i) => {
    const y = 1.1 + i * 0.6;
    s.addShape(pres.shapes.RECTANGLE, { x: 0.6, y, w: 8.8, h: 0.5, fill: { color: C.card } });
    s.addShape(pres.shapes.RECTANGLE, { x: 0.6, y, w: 0.06, h: 0.5, fill: { color: C.rose } });
    s.addText(g.gap, { x: 0.9, y, w: 2.2, h: 0.5, fontSize: 12, fontFace: "Calibri", color: C.rose, bold: true, valign: "middle", margin: 0 });
    s.addText(g.desc, { x: 3.3, y, w: 5.9, h: 0.5, fontSize: 11, fontFace: "Calibri", color: C.lightSlate, valign: "middle", margin: 0 });
  });
  footer(s);
  s.addNotes("Critical gaps: KRAS G12C, SCLC, ALK/ROS1/MET, orthotopic models, head-to-head comparisons, AI validation, immunotherapy combinations.");
}

// =====================================================
// SLIDE 32: Five Opportunities — numbered cards
// =====================================================
{
  const s = pres.addSlide();
  s.background = { color: C.bg1 };
  s.addText("Five Emerging Opportunities", {
    x: 0.6, y: 0.25, w: 8, h: 0.6,
    fontSize: 24, fontFace: "Georgia", color: C.white, bold: true, margin: 0,
  });

  const opps = [
    { title: "Oral Peptide Therapeutics", desc: "SFTI-G5 proves it's possible — generalizing scaffold grafting transforms compliance", c: C.emerald },
    { title: "AI-to-Clinic", desc: "First AI-discovered ACP in clinical trials validates the computational field", c: C.violet },
    { title: "Peptide-Immunotherapy", desc: "PD-L1 cyclotide grafts could synergize with checkpoint inhibitors", c: C.sky },
    { title: "Inhalable Delivery", desc: "Direct pulmonary deposition bypasses systemic distribution", c: C.amber },
    { title: "Dual-Target Peptides", desc: "NKTP-3 proved surface + intracellular targeting is feasible", c: C.cyan },
  ];

  opps.forEach((o, i) => {
    const y = 1.0 + i * 0.88;
    s.addShape(pres.shapes.RECTANGLE, { x: 0.5, y, w: 9, h: 0.75, fill: { color: C.card }, shadow: softShadow() });
    s.addShape(pres.shapes.RECTANGLE, { x: 0.5, y, w: 0.06, h: 0.75, fill: { color: o.c } });
    // Number
    s.addShape(pres.shapes.OVAL, { x: 0.8, y: y + 0.12, w: 0.5, h: 0.5, fill: { color: o.c } });
    s.addText(String(i + 1), { x: 0.8, y: y + 0.12, w: 0.5, h: 0.5, fontSize: 16, fontFace: "Georgia", color: C.bg1, bold: true, align: "center", valign: "middle", margin: 0 });
    s.addText(o.title, { x: 1.5, y: y + 0.05, w: 7.7, h: 0.32, fontSize: 14, fontFace: "Calibri", color: C.white, bold: true, margin: 0 });
    s.addText(o.desc, { x: 1.5, y: y + 0.37, w: 7.7, h: 0.32, fontSize: 11, fontFace: "Calibri", color: C.slate, margin: 0 });
  });
  footer(s);
  s.addNotes("Five opportunities: oral peptides, AI-to-clinic, peptide-immunotherapy, inhalable delivery, dual-target peptides.");
}

// =====================================================
// SLIDE 33: REFERENCES + THANK YOU
// =====================================================
{
  const s = pres.addSlide();
  s.background = { color: C.bg1 };
  // Decorative circles (matching title slide)
  [[8.5, 0.3, 0.8], [9.0, 1.2, 0.5], [8.2, 1.5, 0.35]].forEach(([x, y, r]) => {
    s.addShape(pres.shapes.OVAL, { x, y, w: r, h: r, fill: { color: C.cyan, transparency: 85 } });
  });

  s.addText("Thank You", {
    x: 0.8, y: 0.3, w: 5, h: 0.7,
    fontSize: 32, fontFace: "Georgia", color: C.white, bold: true, margin: 0,
  });
  s.addText("19 Papers Surveyed (2014–2025)", {
    x: 0.8, y: 0.95, w: 5, h: 0.3,
    fontSize: 12, fontFace: "Calibri", color: C.cyan, margin: 0,
  });
  s.addShape(pres.shapes.LINE, { x: 0.8, y: 1.35, w: 2, h: 0, line: { color: C.cyan, width: 1 } });

  const refs1 = [
    "1.  McGuire et al. (2014) Sci Rep",
    "2.  Chi et al. (2017) Theranostics",
    "3.  Bakhshinejad et al. (2018) IJPR",
    "4.  Furman et al. (2022) Pharmaceutics",
    "5.  Zhou et al. (2022) JACS",
    "6.  Shin et al. (2022) IJMS",
    "7.  Yang et al. (2022) Pharmaceutics",
    "8.  Mudd et al. (2022) J Med Chem",
    "9.  Nhan et al. (2023) IJMS",
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

  const mkRef = (r) => ({ text: r, options: { breakLine: true, fontSize: 9, color: C.slate, fontFace: "Calibri" } });

  s.addText(refs1.map(mkRef), { x: 0.8, y: 1.5, w: 4.2, h: 3.8, margin: 0 });
  s.addText(refs2.map(mkRef), { x: 5.2, y: 1.5, w: 4.2, h: 3.8, margin: 0 });
  s.addNotes("All 19 papers listed. Thank you — happy to take questions.");
}

// Write
const outPath = path.join(__dirname, "cancer-peptides-survey.pptx");
pres.writeFile({ fileName: outPath }).then(() => {
  console.log("Done:", outPath);
}).catch(err => console.error("Error:", err));
