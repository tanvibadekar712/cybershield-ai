# CyberShield AI 🛡️

**Smart Cyberbullying Detection & Prevention System Using NLP & Machine Learning**

CyberShield AI is an intelligent text moderation and cyberbullying detection application built with Flask, pure Python NLP (TF-IDF vectorizer + logistic regression), and modern responsive web UI.

---

## Features

- 🚫 **Toxic Comment Detection**: Detects abusive, hostile, and cyberbullying language in real time.
- 📊 **Multi-label Classification**: Analyzes toxicity across 6 distinct categories:
  - Toxic
  - Severe Toxic
  - Obscene
  - Threat
  - Insult
  - Identity Hate
- 🚦 **Severity Rating**: Classifies inputs into `none`, `low`, `medium`, and `high` risk.
- 🔍 **Explainability**: Highlights the specific trigger words pushing the model toward harmful classification and provides reasons.
- 💬 **Safer Comment Rewriting**: Offers constructive, respectful alternatives for aggressive messages.
- 📈 **Analytics Dashboard**: Interactive charts tracking historical analysis trends, category distributions, and severity breakdowns using Chart.js.

---

## Project Structure

```text
cybershield-ai/
├── .venv/               # Python virtual environment
├── data/
│   └── history.json     # Analysis logs and history
├── model/
│   └── cybershield.json # Pre-trained TF-IDF & Logistic Regression weights
├── static/
│   ├── css/
│   │   └── style.css    # Modern UI styles & theme system
│   └── js/
│       ├── analyzer.js  # Comment analyzer client logic
│       ├── dashboard.js # Chart.js analytics dashboard logic
│       └── main.js      # Global theme toggler (Dark / Light)
├── templates/
│   ├── base.html        # Base HTML layout
│   ├── index.html       # Landing page
│   ├── analyzer.html    # Interactive analyzer page
│   └── dashboard.html   # Real-time analytics dashboard
├── app.py               # Flask application & inference engine
├── train_model.py       # Pure Python training script
├── requirements.txt     # Python dependencies
└── README.md
```

---

## Getting Started

### 1. Prerequisites
- Python 3.10+ (tested with Python 3.14)

### 2. Environment Activation

The virtual environment `.venv` has already been created. To activate it in your terminal:

**Windows PowerShell:**
```powershell
.\.venv\Scripts\Activate.ps1
```

**Windows Command Prompt (cmd):**
```cmd
.\.venv\Scripts\activate.bat
```

### 3. Install Dependencies (already installed)
```bash
pip install -r requirements.txt
```

### 4. Run the Application
```bash
python app.py
```
Or directly using the virtual environment interpreter:
```powershell
.\.venv\Scripts\python.exe app.py
```

Open your browser and navigate to:
```
http://127.0.0.1:5000
```

---

## Retraining the Model (Optional)

The pre-trained weights are stored in `model/cybershield.json`. If you wish to retrain:
```powershell
.\.venv\Scripts\python.exe train_model.py
```
*Note: To train on a full Kaggle Toxic Comment dataset, place `train.csv` into the `data/` directory.*
