# Presenter Script: Cancer-Targeting Peptides for Lung Cancer (2014–2025)

*Literature Survey of 19 Papers — Narration Guide*

---

## Slide 1: Title Slide

> "Good [morning/afternoon]. Today I'll be presenting a literature survey on cancer-targeting peptides for lung cancer — spanning a decade of research from 2014 to 2025. This survey covers 19 papers across the full spectrum: from peptide discovery and direct anticancer activity, through drug conjugates and nanoparticle delivery, all the way to the latest AI-driven design approaches."

---

## Slide 2: Contents / Outline

> "Here's the roadmap. We'll move through seven sections. We start with how peptides are discovered and engineered to target lung cancer cells. Then we look at peptides that kill cancer directly. Next, peptide-drug conjugates — where peptides deliver toxic payloads. Then nanoparticle platforms. After that, the computational and AI side. We'll cover the major review papers, and finally, a cross-cutting analysis tying everything together."

---

## Slide 3: Section 1 — Peptide Discovery and Targeting (Intro)

> "Let's start with the foundation — how do we find peptides that specifically recognize and bind to lung cancer cells? The primary workhorse here has been phage display biopanning, a technique where billions of random peptide sequences are screened against live cancer cells to identify the best binders."

---

## Slide 4: McGuire et al. (2014) — Tumor Targeting Peptides for NSCLC

> "The story starts in 2014 with McGuire and colleagues at SRI International. They screened three phage display libraries — 7-mer, 12-mer, and cyclic — against live NSCLC cells. Out of this, they identified 11 novel peptides. What made this study stand out was the scale of validation — they tested binding across a panel of 40 cell lines and found that binding patterns correlate with EGFR and KRAS genotype. Their best tetrameric constructs achieved binding affinities as tight as 7 picomolar. This paper laid the groundwork — the same group would come back nearly a decade later with an optimized version."

*[Point to figure: Binding profiles across 40-cell-line panel]*

---

## Slide 5: Chi et al. (2017) — Lung Cancer-Targeting Peptides for Multi-Subtype Indication

> "Chi et al. took a different approach — they used phage display on H460 cells and identified three peptides: HSP1, HSP2, and HSP4. What's unique here is that these peptides work across both SCLC and NSCLC — four subtypes total. That's rare in this field. When they conjugated HSP4 to liposomal doxorubicin, treated mice survived a median of 131 days compared to 84 for controls — a 47-day extension. They also demonstrated theranostic use: the same peptides enabled MRI tumor imaging with a 42% signal reduction. And critically, this is the only paper in our entire 19-paper survey that uses an orthotopic lung cancer model rather than subcutaneous."

*[Point to figure: MRI imaging showing tumor homing]*
*[Point to figure: Survival curves — 131 vs 84 days]*

---

## Slide 6: Bakhshinejad & Nasiri (2018) — Novel Tumor-Binding Peptide LCP1

> "Bakhshinejad identified LCP1, a short 7-mer peptide — just seven amino acids — with a selectivity index of 5.1 for A549 lung cancer over normal lung cells. Importantly, it showed no binding to liver, esophageal, or breast cancer, suggesting genuine lung specificity. This is early-stage work — in vitro only, receptor unknown — but it demonstrates that even very short peptides can achieve tissue-specific targeting."

---

## Slide 7: Furman et al. (2022) — Cyclic Peptides for EGFR/EGFRvIII

> "Furman et al. represent the next evolution. They combined phage display with next-generation sequencing — screening over 617,000 sequences computationally rather than picking colonies by hand. This is the first study to merge these two approaches at scale. Their cyclic peptide P9, when conjugated to camptothecin, was 2-3 times more cytotoxic than the free drug on lung cancer cells. The EGFR targeting is particularly relevant since EGFR mutations drive about 15% of NSCLC cases."

*[Point to figure: Molecular docking of peptides to EGFR]*

---

## Slide 8: Zhou et al. (2022) — NKTP-3 Cyclic D-Peptide for Dual Targeting

> "Zhou et al. achieved something no one else in this survey did — dual targeting. Their peptide NKTP-3 is a cyclic D-peptide, meaning it uses mirror-image amino acids for protease resistance. It binds NRP1 on the cell surface to get inside, then targets intracellular KRAS G12D — a mutation found in about 13% of NSCLC. It's selective for G12D over wild-type and other KRAS mutants. Strong antitumor activity in vivo with no obvious toxicity. This dual surface-plus-intracellular targeting paradigm could be a game-changer."

---

## Slide 9: Allred et al. (2023) — Peptide-Guided Saporin Delivery to NSCLC

> "Remember McGuire 2014? This is the payoff — same group, nearly a decade later. They optimized their original peptide down to a 10-amino-acid monomer called MGS4_V8, with N-terminal acetylation for stability. The numbers are impressive: EC50 under 40 nanomolar on four NSCLC lines, and when conjugated to the toxin saporin, an IC50 of 9.4 nanomolar. In mice, they saw 25 to 40-fold tumor accumulation and about 50% tumor reduction. The peptide remained detectable in tumors for 72 hours. This is a textbook example of iterative optimization from discovery to therapeutic candidate."

*[Point to figure: NIR imaging showing 240-fold tumor accumulation]*

---

## Slide 10: Section 2 — Anticancer Peptides with Direct Activity (Intro)

> "Now let's shift from peptides that target to peptides that kill. These are anticancer peptides — or ACPs — where the peptide itself is the therapeutic, not just a delivery vehicle. They kill through mechanisms like membrane disruption and apoptosis."

---

## Slide 11: Shin et al. (2022) — AC-P19M: De Novo Designed Anticancer Peptide

> "Shin et al. used AI prediction tools — mACPpred, ACPred, and ENNACT — to computationally design a peptide from scratch. AC-P19M has a net charge of +9 and an alpha-helical structure. It kills A549 and H460 cells at IC50s of 10-15 micromolar with zero toxicity to normal cells up to 100 micromolar. What's remarkable is the multi-mechanism activity: apoptosis, membrane disruption, near-complete VEGFR2 suppression, and anti-EMT effects all in one peptide. This is an early but promising example of AI-assisted peptide design."

*[Point to figure: Design pipeline from database mining through AI prediction]*

---

## Slide 12: Yang et al. (2022) — K4F6K4 Triblock Amphiphilic Peptide

> "Yang et al. took a completely different, elegant approach — rational design of a simple triblock peptide: four lysines, six phenylalanines, four lysines. That's it — 14 residues. The cationic lysine blocks interact with the negatively charged cancer cell membrane, while the hydrophobic phenylalanine core disrupts it. In vivo, this achieved an 81.6% tumor volume reduction at Day 28 with 12.9-fold selectivity over normal lung fibroblasts. The simplicity is the point — this is fundamentally different from receptor-based targeting."

*[Point to figure: 81.6% tumor volume reduction in vivo]*
*[Point to figure: Membrane disruption mechanism schematic]*

---

## Slide 13: Section 3 — Peptide-Drug Conjugates and Delivery (Intro)

> "Section 3 covers peptide-drug conjugates — PDCs — where peptides serve as guided missiles delivering cytotoxic payloads directly to cancer cells. Think of these as the peptide equivalent of antibody-drug conjugates, but at a fraction of the size."

---

## Slide 14: Mudd et al. (2022) — BT8009 Bicycle Toxin Conjugate

> "BT8009, now known as zelenectide pevedotin, is the star of this survey. It's a bicycle peptide — constrained by a TATA scaffold into a rigid double-loop structure — conjugated to MMAE via a cleavable Val-Cit linker. At just 4 kilodaltons, it achieves antibody-like affinity: KD of 2.8 nanomolar for Nectin-4. In xenograft models, near-complete tumor regression by Day 18. And here's the headline: BT8009 is in Phase I/II clinical trials — making it the most clinically advanced peptide therapeutic in our entire survey. This is the proof that peptides can make it from bench to bedside."

*[Point to figure: BT8009 chemical structure]*
*[Point to figure: Near-complete tumor regression curve]*

---

## Slide 15: Singh et al. (2025) — SFTI-G5: First Oral EGFR-Targeting Peptide

> "Singh et al. may have achieved the biggest paradigm shift in this survey. SFTI-G5 is a 14-amino-acid bicyclic peptide — an EGFR-binding epitope grafted into a sunflower trypsin inhibitor scaffold. IC50 of 73 nanomolar on Calu-3 NSCLC, with over 500-fold selectivity over normal cells. But the breakthrough is oral bioavailability. Peptides are notoriously unstable in the gut — they get digested. The SFTI scaffold protects against that. If this generalizes, it could transform patient compliance — imagine taking an anticancer peptide as a pill instead of an injection."

---

## Slide 16: Section 4 — Nanoparticles and Delivery Platforms (Intro)

> "Section 4 covers the nanoparticle angle — how peptides are being integrated into nanocarrier systems for enhanced delivery to lung tumors."

---

## Slide 17: Kim & Park (2024) — Functionalized Peptides in Nanomedicine

> "Kim and Park reviewed three strategies: peptides as targeting ligands on nanoparticle surfaces, self-assembling peptide nanostructures, and stimuli-responsive peptide systems. The lung cancer highlight was CPP33 — a cell-penetrating peptide loaded onto a ZIF-90 metal-organic framework carrying both survivin siRNA and Oridonin. This dual-payload approach showed preferential A549 uptake and tumor reduction in vivo."

---

## Slide 18: Lee et al. (2025) — Engineered Nanocarriers for Lung Cancer

> "Lee et al. provided the most comprehensive nanocarrier review — covering liposomes, PLGA, dendrimers, exosomes, and inorganic nanoparticles. The clinical highlight is T-DXd, trastuzumab deruxtecan, which achieves about 55% response rate in HER2-mutant NSCLC and is already approved. But the emerging trend they identify is inhalable nanoparticle systems — direct pulmonary deposition that bypasses systemic circulation entirely. For lung cancer specifically, this route makes intuitive sense."

---

## Slide 19: Section 5 — Computational and AI-Driven Design (Intro)

> "Section 5 looks at the computational revolution — how AI and machine learning are reshaping peptide design and discovery."

---

## Slide 20: Wu et al. (2025) — AI-Driven Anticancer Peptide Discovery

> "Wu et al. reviewed 68 AI-based ACP prediction models — spanning SVMs, Random Forests, CNNs, LSTMs, Transformers, and protein language models like ProtBERT and ESM. They propose a four-stage framework: data curation, feature extraction and training, model interpretability, and wet-lab validation. The critical gap they highlight — and I want to emphasize this — is that most of these 68 models lack experimental validation. No AI-discovered ACP has reached clinical trials yet. The AI hype is real, but the validation gap is equally real."

---

## Slide 21: Chowdhury et al. (2025) — Molecular Chimera: Grafted Stable Peptides

> "Chowdhury et al. provide the theoretical framework behind Singh's SFTI-G5 — both from the same lab at LSU. The concept is 'molecular chimeras': take plant-derived scaffolds like cyclotides, which have a cyclic cystine knot with three disulfide bonds, and graft in cancer-targeting epitopes. The scaffold provides extraordinary stability — resistance to proteases, heat, and gastric acid — while the grafted loop provides target specificity. Targets covered include EGFR, HER2, PD-L1, VEGF, and p53-HDM2. This is the blueprint for the next generation of stable, orally available peptide therapeutics."

---

## Slide 22: Section 6 — Reviews and Landscape Papers (Intro)

> "Section 6 covers five review papers that provide the broader context for everything we've discussed."

---

## Slide 23: Karankar et al. (2025)

> "Karankar et al. mapped peptides against six NSCLC driver mutations — EGFR, TP53, BRAF, MET, ROS1, and ALK. Their key insight: peptides occupy a sweet spot between small-molecule TKIs and large antibodies, potentially addressing TKI-resistant tumors. But notably, they found zero experimental peptides targeting ALK, ROS1, or MET fusions — a clear gap."

---

## Slide 24: Karati et al. (2025) & Nhan et al. (2023)

> "Karati et al. focused specifically on chemoresistance. Their key finding: anticancer peptides bypass P-glycoprotein efflux — the primary resistance mechanism — through direct membrane disruption. This is fundamentally different from how conventional drugs work and could be a major advantage. Nhan et al. provided the broadest scope — 56 pre-clinical and 10 clinical-stage peptides, with historical context going back to the first FDA-approved peptide, Leuprorelin, in 1985."

---

## Slide 25: Alamdari-palangi et al. (2023) & Bauso et al. (2024)

> "Alamdari-palangi cataloged 28 clinical trials of peptide-drug conjugates, highlighting BT8009 as a key next-generation design. Bauso et al. cataloged seven lung cancer peptides with full sequences and noted that over 1,000 clinical trials using anticancer peptides are ongoing globally."

---

## Slide 26: Section 7 — Cross-Cutting Analysis (Intro)

> "Now let's step back and look at the patterns across all 19 papers."

---

## Slide 27: Method Evolution Timeline (2014 → 2025)

> "The field has evolved through distinct eras. It started with classic phage display in 2014-2018. By 2022, next-generation sequencing merged with phage display, and computational virtual screening entered the picture. Also in 2022, we saw the first de novo AI-designed peptides. By 2025, scaffold engineering and large-scale AI models dominate. The trajectory is clear — from empirical screening toward rational, computationally guided design."

---

## Slide 28: Target Landscape Table

> "Looking at molecular targets: EGFR and HER2 appear in 8 papers and have the most advanced peptide — SFTI-G5 at 73 nanomolar. Nectin-4 has BT8009 in Phase I/II trials. KRAS G12D is covered by 4 papers. But look at the gaps: zero peptides targeting KRAS G12C — which is the most common KRAS mutation in NSCLC smokers — and zero for ALK, ROS1, or MET fusions. These are significant unmet needs."

---

## Slide 29: Efficacy Comparison — Top Performers

> "Here are the headline numbers across the survey. Best binding: 7 picomolar from McGuire's tetramers. Best cytotoxicity: 9.4 nanomolar for the MGS4_V8-saporin conjugate. Best tumor reduction: 81.6% from Yang's simple triblock peptide. Longest survival extension: 47 days from Chi's HSP4 liposomal formulation. Best selectivity: over 500-fold from Singh's SFTI-G5. And BT8009 achieved near-complete regression. These are compelling numbers that rival antibody-drug conjugates."

---

## Slide 30: Clinical Translation Pipeline

> "Where does everything stand? Most papers — Bakhshinejad, Shin, Furman — remain at the discovery stage. Six papers have in vivo xenograft data. Only BT8009 has reached clinical trials. And the AI space, despite 68 models, has zero clinical validation. The pipeline is heavily front-loaded — discovery is outpacing translation."

---

## Slide 31: Key Gaps and Opportunities

> "Let me highlight the critical gaps. KRAS G12C: most common KRAS mutation in smokers, no peptide solution. SCLC: only one paper addresses it. No head-to-head comparisons with standard-of-care antibodies or TKIs. No combination studies with immunotherapy. And only one orthotopic model — the rest use subcutaneous, which doesn't reflect the lung microenvironment."

---

## Slide 32: Five Emerging Opportunities

> "I'll close with five opportunities I see emerging from this survey:
> 1. **Oral peptide therapeutics** — SFTI-G5 proved it's possible. Generalizing scaffold grafting to other targets could transform compliance.
> 2. **AI-to-clinic** — The first AI-discovered ACP to reach trials will validate the entire computational approach.
> 3. **Peptide-immunotherapy combinations** — PD-L1-targeting cyclotide grafts could synergize with checkpoint inhibitors.
> 4. **Inhalable delivery** — Lung-specific nanoparticles bypass systemic distribution — intuitive for lung cancer.
> 5. **Dual-target peptides** — NKTP-3 showed surface-plus-intracellular targeting works. Expanding this paradigm is high-impact."

---

## Slide 33: References

> "All 19 papers are listed here with links. Thank you for your attention — I'm happy to take questions."

---

*Total estimated presentation time: 25–30 minutes*
