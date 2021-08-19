import { fetchJSON } from "https://js.sabae.cc/fetchJSON.js";
            
const enc = (s) => {
    s = s.replace(/&/g, "&amp;");
    s = s.replace(/</g, "&lt;");
    s = s.replace(/>/g, "&gt;");
    s = s.replace(/\n/g, "<br>");
    return s;
};

window.onload = async () => {
    const data = await fetchJSON("api/board/list", {});

    for (const d of data) {
        const div = document.createElement("div");
        div.className = "bbsitem";
        div.innerHTML = `</span> by <span class=name>${enc(d.name)}　　　<span class=date>${enc(d.date)}</span>
            <div class=body>${enc(d.body)}</div>`
        container.appendChild(div);
    }
};

btn_write.onclick = async () => {
    const item = {
        name: inp_name.value,
        body: inp_body.value,
        date: new Date().toString()
    };
    if (await fetchJSON("api/board/add", item) == "ok") {
        window.location.reload();
    }
}