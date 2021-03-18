import React from "react";
import "./healing.scss";
import useWindowDimensions from "../../sizeHook";

function Contact() {
  const { width } = useWindowDimensions();
  return (
    <main className="App-healing container-fluid">
      <div className="row">
        <div className="text-center">
          <h1>Vad är Healing?</h1>
          <br></br>
          <h3>Andlig healing</h3>
          <br></br>
          <div
            className="col-9 mx-auto"
            style={width > 1000 ? { display: "flex" } : { display: "unset" }}
          >
            <div className={width > 1000 ? "col-5 mx-auto" : "col-8 mx-auto"}>
              <p>
                Energi finns i överflöd runt omkring oss.
                <br></br>
                Det finurliga med healing är att energin fångas upp och används
                där det behövs just nu. Healing betyder läkande genom
                energitillförsel. Som healer är jag kanalen, transformatorn, för
                denna energitillförsel.
              </p>
              <p>
                Jag hämtar in av universums överflöd och tack vare denna
                energi kan din kropp få hjälp till läkning oavsett om du har
                fysiska, känslomässiga, mentala eller själsliga obalanser. Jag
                som healer är bara kanalen, jag påverkar inte vart energin tar
                vägen och på vilket sätt du kommer att märka det för
                healingenergin är den visaste av alla.
              </p>
            </div>
            <div className={width > 1000 ? "col-5 mx-auto" : "col-8 mx-auto"}>
              <p>
                Det finns många olika sorters healing där healern gör på olika
                sätt men slutresultatet är i princip det samma. Jag ger andlig
                healing och får då hjälp av min guide att ge dig där du behöver
                det bäst. Den ena healingsessionen är aldrig den andra lik,
                varje är unik. Det är det som gör det så fascinerande.
              </p>
              <p>
                Healing är ingen quick fix, det kan behövas flera sessioner för
                att uppnå ett varaktigt resultat. Healingen ger dig precis så
                mycket som du kan ta hand om varje gång. Om du upplever att du
                har fått för mycket så kan du be energin att dämpa sig. Viktigt
                att tänka på efter att ha tagit emot healing är att dricka
                vatten de närmaste dagarna för att hjälpa kroppen i dess
                utrensningsprocess.
              </p>
            </div>
          </div>
        </div>
      </div>
    </main>
  );
}

export default Contact;
