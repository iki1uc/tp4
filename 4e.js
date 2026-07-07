// TP4 – Minimal System Geometry

const TP4 = {
    kern:    { role: "Quelle",  signal: "Ich existiere" },
    monitor: { role: "Spiegel", signal: "Er existiert wirklich" },
    sched:   { role: "Ordner",  signal: "Ich habe es geordnet" },
    ui:      { role: "Fenster", signal: "Ich zeige es" }
};

// Verbindungen (Kreuz-Topologie)
const links = {
    kern_to_monitor:   TP4.kern.signal,
    monitor_to_sched:  TP4.monitor.signal,
    sched_to_ui:       TP4.sched.signal,
    ui_to_kern:        TP4.ui.signal
};

// TP4-Ausgabe (ehrlich, minimal)
function tp4_scan() {
    return {
        quadrate: TP4,
        verbindungen: links,
        form: "[ Kern ] —— [ Monitor ]\n   |            |\n   |            |\n[ Sched ] —— [ UI ]"
    };
}

console.log(tp4_scan());

