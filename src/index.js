let options = [
    {
      id: "option-1",
      title: "SIPConnect IA",
      hashtag: "#SIPConnect_IA",
      description:
        "Hashtag que filtra contenidos interesantes del evento SIPConnect asociados a la IA",
      url: "https://tinyurl.com/yc7cam3s",
    },
    {
      id: "option-2",
      title: "SIP Connect 2024",
      hashtag: "#SIPConnect2024",
      description:
        "Hashtag que filtra contenidos asociados al evento SIPConnect 2024 de la SIP",
      url: "https://tinyurl.com/mst7ranm",
    },
    {
      id: "option-3",
      title: "Medios Informativos",
      hashtag: "#TD_Medios",
      description:
        "Hashtag que filtra contenidos generales de Transformación Digital en Medios Informativos",
      url: "https://tinyurl.com/599fmebb",
    },
    {
      id: "option-4",
      title: "Descargas",
      hashtag: "#Descargas",
      description:
        "Hashtag que lleva a descargas asociadas a la IA en Medios Informativos",
      url: " https://tinyurl.com/3srbvece",
    },
    {
      id: "option-5",
      title: "Medios Informativos e Inteligencia Artificial",
      hashtag: "#TD_Medios + #TD_IA",
      description:
        "Hashtag que filtra contenidos de Transformación Digital de Medios enfocado en la IA",
      url: "https://tinyurl.com/57xxd8b6",
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