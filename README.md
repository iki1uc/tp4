# TP4 – Allumfassende Grundform des TP-Systems

TP4 ist die **Basis-Schicht** des gesamten TP-Systems.  
Es besteht aus **vier Quadraten**, die jeweils eine definierte Rolle tragen:

[ Kern ] —— [ Monitor ]
|            |
|            |
[ Sched ] —— [ UI ]


## Rollen

- **Kern** – Quelle  
- **Monitor** – Spiegel  
- **Sched** – Ordner  
- **UI** – Fenster  

Jedes Quadrat gibt **ein einziges Signal** weiter.  
Damit bleibt TP4 **minimal**, **ehrlich**, **stabil**.

## Kreuz-Topologie

Die vier Quadrate sind **kreuzförmig** verbunden:

- Kern → Monitor  
- Monitor → Sched  
- Sched → UI  
- UI → Kern  

Diese Form erzeugt eine **geschlossene Stabilität**,  
die später für TP8 und TP12 entscheidend ist.

## TP4-ID

Die TP4-ID umfasst:

- Meta-Daten  
- Quadrate mit IDs  
- Rollen  
- Signale  
- Verbindungen  
- Topologie  
- System-Beziehungen  

Sie bildet die vollständige Identität der TP4-Schicht.

## System-Position

- TP4 ist die **obere Schicht**  
- TP8 ist die **Mitte**  
- TP12 ist die **untere Schicht**  
- TP4 ist die **Basis des gesamten TP-Systems**

## Code

Der TP4-ID-Code liegt in `4e.js` und bildet die vier Quadrate + Signale + Topologie ab.
