let options = [
    {
      id: "option-1",
      title: "SIPConnect IA",
      hashtag: "#SIPConnect_IA",
      description:
        "Cura información específica acerca del tema de la transformación digital en la banca.",
      url: "https://www.linkedin.com/feed/hashtag/?keywords=sipconnect_ia",
    },
    {
      id: "option-2",
      title: "SIP Connect 2024",
      hashtag: "#SIPConnect2024",
      description:
        "Cura información específica acerca del tema de la transformación digital en los medios de comunicación.",
      url: " https://www.linkedin.com/feed/hashtag/?keywords=sipconnect2024",
    },
    {
      id: "option-3",
      title: "Medios Informativos",
      hashtag: "#TD_Medios",
      description:
        "Cura información específica acerca del tema de la transformación digital en los deportes y su industria.",
      url: "https://www.linkedin.com/feed/hashtag/?keywords=td_medios",
    },
    {
      id: "option-4",
      title: "Descargas",
      hashtag: "#Descargas",
      description:
        "Cura información específica de la Inteligencia Artificial y cómo está impactando todos los ámbitos en la actualidad",
      url: "https://nestoraltuve.com/wp-content/uploads/2023/05/roadmap-para-la-adopcion-de-la-inteligencia-artificial-en-un-medio-de-comunicacion.pdf",
    },
    {
      id: "option-5",
      title: "Medios Informativos e Inteligencia Artificial",
      hashtag: "#TD_Medios + #TD_IA",
      description:
        "Cura información general acerca del tema de la transformación digital en todas las industrias",
      url: " https://www.linkedin.com/search/results/content/?datePosted=%22past-month%22&keywords=%22%23TD_Medios%2B%23TD_IA%22&origin=FACETED_SEARCH&sid=biZ&sortBy=%22date_posted%22",
    },
  ];
  
  function generateTemplateInfo(title, hashtag, description, url) {
    return `<h2>${title}</h2>
      <h3>${hashtag}</h3>
      <p>${description}</p>
      <div class="posts">
      <a href="${url}"target="_blank">Ver Publicaciones</a></div>`;
  }
  
  function showInformation() {
    let information = document.querySelector("#main-tag");
    let selectedOption = dropdown.value;
    let selectedOptionFromList = options.find(function (item) {
      return item.id === selectedOption;
    });
    information.innerHTML = generateTemplateInfo(
      selectedOptionFromList.title,
      selectedOptionFromList.hashtag,
      selectedOptionFromList.description,
      selectedOptionFromList.url
    );
  }
  
  let dropdown = document.querySelector("#hashtag");
  dropdown.addEventListener("change", showInformation);