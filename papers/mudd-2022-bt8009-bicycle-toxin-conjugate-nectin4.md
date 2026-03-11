# Discovery of BT8009: A Nectin-4 Targeting Bicycle Toxin Conjugate for the Treatment of Cancer

## Paper Metadata

| Field | Details |
|-------|---------|
| **Authors** | Gemma E. Mudd, Heather Scott, Liuhong Chen, Katerine van Rietschoten, Gabriela Ivanova-Berndt, Katarzyna Dzionek, Amy Brown, Sophie Watcham, Lewi White, Phil Jeffrey, Mike Rigby, Paul Beswick |
| **Affiliation** | Bicycle Therapeutics, Cambridge, UK / Lexington, MA, USA |
| **Journal** | Journal of Medicinal Chemistry |
| **Year** | 2022 |
| **Volume/Issue** | 65(21): 14337-14347 |
| **DOI** | [10.1021/acs.jmedchem.2c00065](https://doi.org/10.1021/acs.jmedchem.2c00065) |
| **PMC** | [PMC9661471](https://pmc.ncbi.nlm.nih.gov/articles/PMC9661471/) |
| **PMID** | 36204777 |
| **Type** | Original Research |

## Summary

This paper describes the discovery of BT8009 (zelenectide pevedotin), a bicycle toxin conjugate (BTC) targeting Nectin-4, currently in clinical trials. BT8009 uses a constrained bicyclic peptide (~4 kDa) conjugated to MMAE (monomethyl auristatin E) via a cleavable linker. It achieves near-complete tumor regression in xenograft models with rapid systemic clearance (~1h half-life), representing the first fully synthetic, low-MW construct to selectively target Nectin-4.

## BT8009 Structure

```
[Bicycle Peptide] — [Polysarcosine Spacer] — [Val-Cit Linker] — [MMAE]
     ~1.7 kDa              10-unit                cleavable        toxin
```

### Bicycle Peptide (Compound 58)
- **Sequence**: Ac-CPF[1Nal][dD]CM[HArg]DWTPIP[HyP]WC
- **Scaffold**: TATA (1,3,5-triacryloyl-1,3,5-triazinane) — constrains two loops
- **Binding affinity**: Kd = 2.8 nM (SPR) / 12.9 nM (cellular)
- **Non-natural amino acids**: 1-naphthylalanine, D-aspartate, homoarginine, trans-hydroxyproline
- **Total conjugate MW**: ~4,174 Da

### Payload
- **MMAE**: Microtubule disruptor (auristatin family)
- **Linker**: Valine-citrulline (protease-cleavable in lysosomes)

## Nectin-4 Target

- Cell adhesion molecule overexpressed in bladder, esophageal, pancreatic, and **lung cancers**
- Limited expression in healthy tissues
- Clinically validated: enfortumab vedotin (PADCEV, ADC) FDA-approved for bladder cancer
- BT8009 is the first low-MW synthetic alternative to antibody-based Nectin-4 targeting

## Optimization Journey

| Parameter | Hit (Compound 10) | Optimized (Compound 58) |
|-----------|-------------------|------------------------|
| Kd (nM) | 17.6 | **2.8** |
| Solubility (mg/mL) | 0.16 | **4.6** |
| Mouse plasma t₁/₂ | 1.9 h | **>24 h** |
| Human plasma t₁/₂ | >24 h | **>24 h** |

Key: Non-natural amino acid substitutions improved all three parameters simultaneously.

## In Vivo Efficacy (MDA-MB-468 Xenograft)

| Dose | Schedule | Result |
|------|----------|--------|
| 3 mg/kg | Weekly | Significant antitumor activity |
| 3 mg/kg | Twice weekly | Near-complete regression by Day 18 |
| 5 mg/kg | Weekly | Near-complete regression by Day 18 |

- No tumor regrowth observed through Day 42 after treatment cessation
- Efficacy demonstrated across wide range of CDX and PDX tumor types
- Full regression in both small and large tumors
- Target-dependent: excess free bicycle attenuated efficacy

## Pharmacokinetics

| Parameter | Value |
|-----------|-------|
| Terminal t₁/₂ (mouse) | ~1 hour |
| Clearance | 1.0 mL/min/kg |
| Volume of distribution | 3.5 L/kg |
| Elimination route | Renal (liver-sparing) |
| Human protein binding | 79.3% |

## BTC vs. ADC Comparison

| Feature | BT8009 (BTC) | Enfortumab Vedotin (ADC) |
|---------|-------------|--------------------------|
| Size | ~4 kDa | ~150 kDa |
| Tumor penetration | Rapid, extensive | Limited by size |
| Systemic exposure | ~1 hour | Days |
| Elimination | Renal | Hepatic |
| Synthesis | Fully synthetic | Biological |
| Preclinical efficacy | Superior or equivalent | FDA-approved |

## Clinical Status

- Phase I/II clinical evaluation ongoing
- INN: zelenectide pevedotin
- Indications: Nectin-4+ solid tumors including NSCLC, bladder, pancreatic
- Platform validated by concurrent BTC program (BT1718, MT1-MMP targeting)

## Significance

- First fully synthetic, low-MW construct targeting Nectin-4
- Demonstrates bicycle peptide platform for targeted cancer therapy
- Rapid tumor penetration + short systemic exposure = favorable safety profile
- Generalizable platform: same approach can generate pipeline of tumor-targeting BTCs
- Bridges the gap between small molecules and antibodies

## Limitations

- In vivo data shown primarily for breast cancer (MDA-MB-468) — lung cancer models referenced but not detailed
- Short half-life may require frequent dosing
- Mouse-specific carboxylesterase (Ces1c) cleaves bicycle — complicates mouse PK interpretation
- Clinical efficacy data pending

## Tags

`bicycle peptide` `Nectin-4` `MMAE` `peptide-drug conjugate` `BT8009` `zelenectide pevedotin` `clinical trial` `tumor penetration` `lung cancer` `bladder cancer` `phage display` `original research`
