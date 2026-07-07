# TP4 – Grundform des TP-Systems

TP4 ist die **Basis-Geometrie** des gesamten TP-Systems.  
Es besteht aus **vier Quadraten**, die jeweils eine Rolle tragen:

 Kern ] —— [ Monitor ]
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

## Zweck von TP4

TP4 ist:

- die **oberste Schicht**  
- die **Grundform**  
- die **Start-Geometrie**  
- die **Basis für TP8 und TP12**

Ohne TP4 gibt es **kein TP-System**.

## Code

Der TP4-Code liegt in `4e.js` und bildet die vier Quadrate + Signale ab.
