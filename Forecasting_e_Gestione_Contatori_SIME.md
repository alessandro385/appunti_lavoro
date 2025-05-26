# Forecasting e Gestione Contatori - SIME Partecipazioni S.p.A.

## TECNICHE DI FORECASTING

### Metodologia di Ricandelarizzazione

#### Principio Base
La tecnica di forecasting principale utilizzata si basa sulla **ricandelarizzazione** dei consumi storici:
- **Settimana/Anno Precedente**: Prendere i consumi della settimana o anno passato
- **Spostamento Temporale**: Applicare questi pattern al periodo che sta arrivando
- **Adattamento**: Calibrare i dati in base alle variazioni stagionali e operative

#### Inserimento Nuovo Utente nel Modello
Per integrare un nuovo cliente nel sistema di forecasting:

1. **Acquisizione Dati**:
   - Consumo totale previsto del cliente
   - Pattern del grafico di consumo (profilo di carico)

2. **Applicazione del Pattern**:
   - Distribuire il consumo totale secondo il pattern identificato
   - Garantire una distribuzione temporale corretta
   - Considerare le specificità del cliente (tipo di attività, stagionalità)

#### Gestione Switch (Cambio Fornitore)
In caso di passaggio da una compagnia all'altra:
- **Dati Storici**: Vengono forniti i consumi dell'anno precedente
- **Continuità**: Mantenere il pattern di consumo del cliente
- **Adattamento**: Calibrare eventuali variazioni dovute al cambio

---

## TIPOLOGIE DI CONTATORI ELETTRICI

### POD (Point of Delivery)
Il **POD corrisponde al contatore**, strumento utilizzato per rilevare i valori dei consumi elettrici.

### Contatore 2G (Seconda Generazione)

#### Caratteristiche Tecniche
- **Frequenza di Lettura**: Comunicazione dei consumi ogni 15 minuti
- **Trasmissione**: Dati giornalieri in tempo reale
- **Precisione**: Massima granularità dei dati di consumo
- **Tendenza**: Il mercato si sta spostando sempre più verso questa tecnologia

#### Vantaggi Operativi
- Monitoraggio in tempo reale
- Gestione ottimale del bilanciamento
- Previsioni più accurate
- Controllo immediato degli sbilanciamenti

### Contatore 1G (Prima Generazione)

#### Caratteristiche Tecniche
- **Frequenza di Lettura**: Dati sui consumi orari
- **Trasmissione**: Solo mese per mese
- **Limitazioni**: Ritardo nella disponibilità dei dati

#### Servizio Demetra
**Applicabile ai contatori 1G** per ottenere comunicazione giornaliera:

##### Utilizzo Principale
- **Clienti Corporate**: Grandi aziende con elevati consumi
- **Impianti di Cogenerazione**: Per coprire malfunzionamenti del cogeneratore
- **Backup Energetico**: Gestione dell'aumento di fabbisogno in emergenza

##### Funzionalità
- Trasformazione dati mensili in giornalieri
- Monitoraggio avanzato per clienti strategici
- Gestione proattiva dei picchi di consumo

### Contatori Long Profile

#### Caratteristiche
- **Percentuale di Consumo**: Definita come PRA (Profilo di Prelievo Aggregato)
- **Metodologia**: Per nuovi clienti, ricandelarizzazione dei consumi dell'anno precedente
- **Status**: Tecnologia in dismissione

#### Evoluzione Tecnologica
- **Transizione in corso**: Il mondo dei contatori si sposta verso il 2G
- **Obsolescenza**: Long profile sta progressivamente scomparendo
- **Migrazione**: Clienti esistenti vengono aggiornati a tecnologie più moderne

---

## GESTIONE CLIENTI CORPORATE

### Contratti a Quote Fisse

#### Struttura Contrattuale
Per **clienti di grandi dimensioni** è possibile stabilire:
- **Prezzo Fisso**: Per una determinata quota di consumo
- **Gestione Eccedenze**: Meccanismo di bilanciamento automatico

#### Meccanismo di Sbilanciamento

##### Consumo Superiore alla Quota
- **Eccedenza**: Il cliente acquista la differenza
- **Prezzo**: Applicato il prezzo di mercato di sbilanciamento
- **Automatismo**: Gestione trasparente delle variazioni

##### Consumo Inferiore alla Quota
- **Quota Non Utilizzata**: SIME si occupa della rivendita
- **Prezzo di Sbilanciamento**: Applicato per la vendita sul mercato
- **Storno**: Differenza accreditata al cliente

#### Vantaggi per il Cliente
- Prevedibilità dei costi per la quota base
- Flessibilità per variazioni di consumo
- Gestione automatica degli sbilanciamenti
- Trasparenza nei meccanismi di pricing

---

## OPERATIVITÀ QUOTIDIANA

### Routine Mattutina di Forecasting

#### Attività Giornaliere Essenziali
**Ogni mattina è fondamentale**:

1. **Caricamento Forecast**:
   - Previsioni per i giorni successivi
   - Aggiornamento modelli predittivi
   - Calibrazione dati storici

2. **Aggiustamento Quote**:
   - **Gas**: Bilanciamento in base ai consumi effettivi
   - **Corrente**: Ottimizzazione del portafoglio elettrico
   - **Confronto**: Consumi reali vs previsioni

3. **Monitoraggio Deviazioni**:
   - Analisi scostamenti dalle previsioni
   - Identificazione trend anomali
   - Correzioni proattive

#### Processo di Ottimizzazione
- **Analisi Continua**: Confronto previsioni vs consumi reali
- **Aggiustamenti Real-time**: Modifiche immediate alle strategie
- **Apprendimento**: Miglioramento continuo dei modelli predittivi

---

## BEST PRACTICES OPERATIVE

### Gestione Forecasting
1. **Storicizzazione Dati**: Mantenere archivio completo dei pattern di consumo
2. **Segmentazione Clienti**: Diversificare approcci per tipologia di utente
3. **Stagionalità**: Considerare variazioni climatiche e operative
4. **Validazione**: Controllo qualità delle previsioni

### Ottimizzazione Contatori
1. **Migrazione Tecnologica**: Spingere verso contatori 2G
2. **Servizi Aggiuntivi**: Implementare Demetra per clienti strategici
3. **Monitoraggio**: Controllo performance per tipologia di contatore
4. **Manutenzione**: Gestione proattiva dei dispositivi

### Gestione Portafoglio
1. **Bilanciamento Quotidiano**: Aggiustamenti continui delle posizioni
2. **Risk Management**: Controllo esposizione agli sbilanciamenti
3. **Ottimizzazione Costi**: Minimizzazione dei costi di bilanciamento
4. **Customer Service**: Trasparenza nei meccanismi di pricing

---

## INDICATORI DI PERFORMANCE

### KPI Forecasting
- **Accuratezza Previsioni**: Scostamento medio dalle previsioni
- **Tempo di Reazione**: Velocità di aggiustamento alle deviazioni
- **Costo Sbilanciamenti**: Impatto economico degli errori di previsione

### KPI Gestione Contatori
- **Copertura 2G**: Percentuale clienti con contatori di nuova generazione
- **Utilizzo Demetra**: Penetrazione del servizio sui clienti corporate
- **Qualità Dati**: Affidabilità delle letture per tipologia di contatore

### KPI Operativi
- **Marginalità**: Profitto per tipologia di cliente
- **Soddisfazione Cliente**: Feedback su trasparenza e servizio
- **Efficienza Operativa**: Tempo dedicato alle attività di bilanciamento 