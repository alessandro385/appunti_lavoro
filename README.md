# 📋 Glossario Tecnico SIME - Interfaccia Web

## 🚀 Panoramica

Applicazione web moderna e interattiva per visualizzare il glossario tecnico e le procedure operative di **SIME Partecipazioni S.p.A.** nel settore Supply e Portfolio Power Management.

## ✨ Caratteristiche Principali

### 🎨 Design Moderno
- **Interfaccia responsive** ottimizzata per desktop, tablet e mobile
- **Design professionale** con colori aziendali e animazioni fluide
- **Navigazione intuitiva** con tab organizzate per sezione
- **Header sticky** con logo aziendale e barra di ricerca

### 🔍 Funzionalità di Ricerca
- **Ricerca in tempo reale** attraverso tutti i contenuti
- **Evidenziazione risultati** con animazioni
- **Indicatori di ricerca** per feedback immediato
- **Scorciatoie da tastiera** (Ctrl+K per focus, Esc per reset)

### 📊 Gestione Controlli
- **Checklist interattive** per controlli giornalieri, mensili e annuali
- **Barre di progresso** dinamiche per ogni categoria
- **Salvataggio automatico** dello stato delle checkbox in localStorage
- **Animazioni di completamento** per feedback visivo

### 🎯 Funzionalità Avanzate
- **Tooltip informativi** su acronimi e definizioni
- **Copia negli appunti** con un click sugli acronimi
- **Sistema di notifiche** per feedback utente
- **Animazioni di scroll** per elementi che entrano in vista
- **Navigazione da tastiera** con tasti numerici (1-4)

## 📁 Struttura File

```
📦 Glossario SIME
├── 📄 index.html          # Pagina principale del glossario
├── 📊 forecasting.html    # Pagina forecasting e contatori
├── 🎨 styles.css          # Stili CSS moderni condivisi
├── ⚡ script.js           # Funzionalità JavaScript interattive
├── 📋 Glossario_Tecnico_SIME.md    # Documento glossario originale
├── 📈 Forecasting_e_Gestione_Contatori_SIME.md  # Documento forecasting
├── 📝 Appunti_SIME_Supply_Portfolio_Management.md
└── 📖 README.md           # Questo file
```

## 🚀 Come Utilizzare

### 1. Apertura dell'Applicazione
```bash
# Apri il file index.html nel tuo browser preferito
# Oppure usa un server locale per sviluppo:
python -m http.server 8000
# Poi vai su http://localhost:8000
```

### 2. Navigazione
#### Pagina Principale (index.html)
- **Tab Glossario**: Acronimi, definizioni mercato gas e gestione clienti
- **Tab Procedure**: Processi operativi standardizzati
- **Tab Flussi**: Diagrammi dei processi principali
- **Tab Controlli**: Checklist operative con tracking progresso

#### Pagina Forecasting (forecasting.html)
- **Tab Forecasting**: Tecniche di ricandelarizzazione e previsioni
- **Tab Contatori**: Tipologie 2G, 1G, Long Profile e servizio Demetra
- **Tab Corporate**: Gestione clienti grandi dimensioni e sbilanciamenti
- **Tab Operatività**: Routine quotidiane e KPI di performance

### 3. Ricerca
- Clicca sulla barra di ricerca o premi `Ctrl+K`
- Digita termini, acronimi o procedure
- I risultati vengono evidenziati in tempo reale
- Premi `Esc` per cancellare la ricerca

### 4. Gestione Controlli
- Spunta le checkbox per marcare attività completate
- Visualizza il progresso tramite le barre colorate
- Lo stato viene salvato automaticamente nel browser

## 🎨 Sezioni Principali

### 📚 Glossario Termini Tecnici (index.html)
- **Acronimi e Sigle**: G.M.E., U.D.D., P.S.V., R.C.U., HUB, UTP, G.O.
- **Mercato Gas**: Anno Gas, Base Load, Day Ahead, Intraday, Prezzi
- **Gestione Clienti**: Switch, Allocazioni, Contatori 2G

### ⚙️ Procedure Operative (index.html)
- **Garanzie e Margini**: Gestione costi e margini di guadagno
- **Gestione Portafoglio**: Monitoraggio quotidiano e bilanciamento
- **Portafoglio Switch**: Gestione cambi fornitore e ricontrattazioni

### 🔄 Flussi Operativi (index.html)
- **Flusso Gas**: Acquisto → HUB → P.S.V. → Distribuzione → Cliente
- **Flusso Elettrico**: Produttori → Terna → Distribuzione → Cliente
- **Gestione Switch**: Richiesta → Verifica → Attivazione → Controllo → Fatturazione

### ✅ Controlli e Verifiche (index.html)
- **Giornalieri**: Misure contatori, allocazioni, prezzi, sbilanciamenti
- **Mensili**: Riconciliazioni, garanzie, analisi portafoglio, margini
- **Annuali**: Revisione anno gas, procedure, performance

### 📈 Forecasting e Previsioni (forecasting.html)
- **Ricandelarizzazione**: Utilizzo pattern storici per previsioni future
- **Nuovo Utente**: Integrazione clienti nel modello predittivo
- **Gestione Switch**: Continuità dati storici nei cambi fornitore

### 🔌 Gestione Contatori (forecasting.html)
- **Contatori 2G**: Letture ogni 15 minuti, tecnologia avanzata
- **Contatori 1G + Demetra**: Potenziamento per clienti corporate
- **Long Profile**: Sistema tradizionale in dismissione
- **POD**: Point of Delivery, identificazione univoca contatori

### 🏢 Clienti Corporate (forecasting.html)
- **Contratti Quote Fisse**: Prezzi stabiliti per quote predefinite
- **Sbilanciamenti**: Gestione automatica eccedenze e deficit
- **Vantaggi**: Prevedibilità, flessibilità, trasparenza

### ⏰ Operatività Quotidiana (forecasting.html)
- **Routine Mattutina**: Caricamento forecast e aggiustamenti
- **Monitoraggio**: Analisi deviazioni e correzioni proattive
- **KPI**: Indicatori performance per forecasting, contatori e operazioni

## 🎯 Scorciatoie da Tastiera

| Tasto | Azione |
|-------|--------|
| `Ctrl+K` | Focus sulla ricerca |
| `Esc` | Cancella ricerca |
| `1-4` | Naviga tra le sezioni |
| `Click` su acronimo | Copia negli appunti |

## 🔧 Personalizzazione

### Colori Aziendali
```css
:root {
  --primary-color: #667eea;
  --secondary-color: #764ba2;
  --accent-color: #ffd700;
  --success-color: #48bb78;
  --warning-color: #ed8936;
}
```

### Aggiungere Nuovi Contenuti
1. Modifica il file `index.html` per aggiungere nuove sezioni
2. Aggiorna gli stili in `styles.css` se necessario
3. Estendi le funzionalità in `script.js` per nuove interazioni

## 📱 Compatibilità

- ✅ **Desktop**: Chrome, Firefox, Safari, Edge
- ✅ **Mobile**: iOS Safari, Chrome Mobile, Samsung Internet
- ✅ **Tablet**: Ottimizzato per iPad e Android tablet
- ✅ **Responsive**: Adattamento automatico a tutte le dimensioni

## 🔮 Funzionalità Future

- [ ] **Esportazione PDF** dei contenuti
- [ ] **Modalità offline** con Service Worker
- [ ] **Tema scuro/chiaro** personalizzabile
- [ ] **Sincronizzazione cloud** dei progressi
- [ ] **Notifiche push** per scadenze
- [ ] **Integrazione API** con sistemi aziendali

## 🛠️ Sviluppo

### Tecnologie Utilizzate
- **HTML5**: Struttura semantica moderna
- **CSS3**: Grid, Flexbox, animazioni, gradients
- **JavaScript ES6+**: Moduli, async/await, localStorage
- **Font Awesome**: Icone professionali
- **Google Fonts**: Tipografia Inter

### Best Practices Implementate
- **Responsive Design**: Mobile-first approach
- **Accessibilità**: ARIA labels, contrasti, navigazione da tastiera
- **Performance**: Lazy loading, animazioni ottimizzate
- **UX**: Feedback immediato, stati di caricamento, micro-interazioni
- **SEO**: Meta tags, struttura semantica

## 📞 Supporto

Per assistenza tecnica o richieste di personalizzazione:
- **Email**: support@sime-partecipazioni.it
- **Interno**: Reparto IT - Supply & Portfolio Management

---

**© 2024 SIME Partecipazioni S.p.A. - Supply e Portfolio Power Management**

*Applicazione sviluppata per ottimizzare la gestione operativa e migliorare l'efficienza del team.* 