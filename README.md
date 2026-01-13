# SmartTailor: Fact-Preserving and Explainable AI-Assisted CV Tailoring

SmartTailor is an AI-assisted system designed to reframe CV tailoring as a fact-preserving, evidence-based rewriting effort rather than a creative task. By utilizing a modular Retrieval-Augmented Generation (RAG) architecture, the system rigorously restricts outputs to a factual inventory supplied by the user to eliminate hallucinations.

## 🚀 Project Links

* **Live Application**: [SmartTailor Web Interface](https://zh-resume-forge.vercel.app/)
* **ChatGPT Custom GPT**: [SmartTailor on ChatGPT Plus](https://chatgpt.com/g/g-6922365cf17c819181e59906122d55e7-smarttailor)

---

## ✨ Key Features

* **Fact-Lock™ Technology**: Ensures zero factual hallucinations by enforcing a "Closed Factual Inventory" that prevents the AI from inventing data.
* **ATS Optimization**: Consistently improves Applicant Tracking System (ATS) alignment scores by an average of 17.9 percentage points over standard AI baselines.
* **Explainable Alignment**: Provides a "Role-Aligned Highlights" section that maps generated claims back to original source evidence for complete transparency.
* **Multi-Agent Architecture**: Uses specialized autonomous agents for data extraction, strategic evaluation, security auditing, and final execution.
* **DEI Audit**: Automatically scans for biased or gender-coded language to ensure inclusive and professional narratives.

---

## 🏗️ System Architecture

SmartTailor operates through a sophisticated four-stage pipeline handled by specialized agents. This modular design ensures that reasoning is separated from writing, maintaining strict adherence to truth.

1. **The Extractor (JSON)**: Normalizes raw resume data (PDF or Text) into a structured JSON format, serving as the "only source of truth" for the entire process.
2. **The Strategic Evaluator (Brain)**: Analyzes the user's inventory against a Target Job Description (JD) using RAG to map existing skills to industry standards like the **Fortune 500 Competency Framework**.
3. **The Adversarial Sentinel (Security)**: Audits drafts before display. It performs a **Fact Audit** to prevent unsupported claims and a **DEI Audit** to remove biased language.
4. **The Writer (Execution)**: Generates the final text using the **"Google XYZ" formula** (Accomplished [X] as measured by [Y], by doing [Z]) and high-impact action verbs.

---

## 📊 Experimental Results

Systematic evaluation across 12 different application scenarios (covering STEM, Business, Social Science, and Art) demonstrated that SmartTailor significantly outperforms standard generative AI.

| Metric | Baseline AI | SmartTailor |
| --- | --- | --- |
| **Factual Hallucinations** | 6 Confirmed Errors | **0 Errors** |
| **Mean ATS Match Score** | 45.7% | **63.6%** |
| **Consistency (Std Dev)** | 6.5% | **5.3%** |

> "SmartTailor consistently improved ATS alignment scores by 10–20 percentage points while producing zero factual hallucinations in all test instances."

---

## 🛠️ Technology Stack

* **Model**: GPT-4 Class LLM
* **Logic**: Retrieval-Augmented Generation (RAG)
* **Environment**: Python Code Interpreter for accurate text processing and secure file querying
* **Knowledge Bases**:
* Universal Competency Framework (Fortune 500 Standards)
* Ivy League Action Verb Database (Harvard Standard)
* O*NET Job Title & Technology Skill Clusters
* Inclusive Language Decoder



---

## 👥 Authors

* **Haizhou Zheng** – University of Zurich
* **Gefei Wang** – University of Zurich
* **Jiawei Pei** – University of Zurich

**Course Instructor**: Prof. Dr. Thiemo Wambsganss
**Seminar**: Fall Term 2025, University of Zurich

---
