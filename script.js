const body = document.querySelector("body"),
  sidebar = body.querySelector(".sidebar"),
  toggle = body.querySelector(".toggle"),
  modeSwitch = body.querySelector(".toggle-switch"),
  modeText = body.querySelector(".mode-text");

  toggle.addEventListener("click",()=>{
    sidebar.classList.toggle("close");
});

modeSwitch.addEventListener("click",()=>{
    body.classList.toggle("dark");

    if (body.classList.contains("dark")) {
        modeText.innerText ="Light Mode"
    } else {
        modeText.innerText = "Dark Mode"
    }
});
//-------------------------------------pdf Document javascript functions----------------------------------
initPDFViewer=()=>{
    $("#mypdf_viewer").html("")
    pdfjsLib.getDocument("FYE_Handbook.pdf").promise.then(pdfDoc=>{
        let pages = pdfDoc._pdfInfo.numPages
        for(let i=1;i<=pages;i++){
        pdfDoc.getPage(i).then(page=>{
            let pdfCanvas = document.createElement("canvas")
            let context = pdfCanvas.getContext("2d")
            let pageViewPort = page.getViewport({scale:2})
            pdfCanvas.width = pageViewPort.width
            pdfCanvas.height = pageViewPort.height
            $("#mypdf_viewer").append(pdfCanvas)


            page.render({
                canvasContext: context,
                viewport: pageViewPort
            })
        }).catch(pageError =>{
            console.log(pageError)
        })
    }
    }).catch(pdfError =>{
        console.log(pdfError)
    })
}
    $(function(){
    initPDFViewer()
})


//-------------------------------------campus navigator javascript functions-------------------------------------
function initMap(){
    //map location
    var options={
        center: {lat: -25.4357557988, lng: 30.9828932223 },
        zoom: 16
    }
    
    //our map
    map = new google.maps.Map(document.getElementById("map"),options);


    
    function addMaker(property){
        var marker = new google.maps.Marker({
            position:property.location,
            map:map,
            draggable: false
        });

        const detailWindow = new google.maps.InfoWindow({
            content: property.content
        });

        marker.addListener("click", ()=>{
        detailWindow.open(map, marker);
        })
    }
    
    addMaker({location:{lat: -25.435642, lng: 30.982423},content:'<h4>ICT Labs & Offices</h4>-25.435642, 30.982423'});
    addMaker({location:{lat: -25.436912, lng: 30.982367},content:'<h4>Library</h4>-25.436912, 30.982367'});
    addMaker({location:{lat: -25.437396, lng: 30.981636},content:'<h4>Main Gate</h4>-25.437396, 30.981636'});
    addMaker({location:{lat: -25.437154, lng: 30.980751},content:'<h4>Building 13</h4>-25.437154, 30.980751'});
    addMaker({location:{lat: -25.436766, lng: 30.981137},content:'<h4>Block E</h4>-25.436766, 30.981137'});
    addMaker({location:{lat: -25.436496, lng: 30.981032},content:'<h4>Block A</h4>-25.436496, 30.981032'});
    addMaker({location:{lat: -25.436879, lng: 30.981349},content:'<h4>Block F</h4>-25.436879, 30.981349'});
    addMaker({location:{lat: -25.436659, lng: 30.980939},content:'<h4>Block D</h4>-25.436659, 30.980939'});
    addMaker({location:{lat: -25.435465, lng: 30.980610},content:'<h4>Building 7</h4>-25.435465, 30.980610'});
    addMaker({location:{lat: -25.436748, lng: 30.981475},content:'<h4>Block C</h4>-25.436748, 30.981475'});
    addMaker({location:{lat: -25.436889, lng: 30.980379},content:'<h4>DH</h4>-25.436889, 30.980379'});
    addMaker({location:{lat: -25.436537, lng: 30.981480},content:'<h4>Loskop</h4>-25.436537, 30.981480'});
    addMaker({location:{lat: -25.436025, lng: 30.980527},content:'<h4>Letaba</h4>-25.436025,30.980527'});
    addMaker({location:{lat: -25.436220, lng: 30.981330},content:'<h4>De Kaap</h4>-25.436220,30.981330'});
    addMaker({location:{lat: -25.435955, lng: 30.980849},content:'<h4>Onderburg</h4>-25.435955, 30.980849'});
    addMaker({location:{lat: -25.435962, lng: 30.981731},content:'<h4>Up Town</h4>-25.435962, 30.981731'});
    addMaker({location:{lat: -25.435820, lng: 30.982281},content:'<h4>Tuckshop</h4>-25.435820, 30.982281'});
    addMaker({location:{lat: -25.434814, lng: 30.980042},content:'<h4>Multi-Purpose Hall</h4> -25.434814, 30.980042'});
    addMaker({location:{lat: -25.434788, lng: 30.980513},content:'<h4>Gym</h4>-25.434788, 30.980513'});
    addMaker({location:{lat: -25.434718, lng: 30.980357},content:'<h4>SRC Offices</h4>-25.434718, 30.980357'});
    addMaker({location:{lat: -25.436062, lng: 30.982656},content:'<h4>Great Hall</h4>-25.436062, 30.982656'});
    addMaker({location:{lat: -25.437239, lng: 30.982293},content:'<h4>Building 2</h4>-25.437239, 30.982293'});
    addMaker({location:{lat: -25.436361, lng: 30.984592},content:'<h4>Building 9</h4>-25.436361, 30.984592'});
    addMaker({location:{lat: -25.436658, lng: 30.985756},content:'<h4>Hotel & Conference</h4>-25.436658, 30.985756'});
    addMaker({location:{lat: -25.436857, lng: 30.985246},content:'<h4>Archives</h4>-25.436857, 30.985246'});
    addMaker({location:{lat: -25.436969, lng: 30.984637},content:'<h4>Building 10 East</h4>-25.436969, 30.984637'});
    addMaker({location:{lat: -25.437088, lng: 30.984098},content:'<h4>Building 10 West</h4>-25.437088, 30.984098'});
    addMaker({location:{lat: -25.436255, lng: 30.983060},content:'<h4>Building 4</h4>-25.436255, 30.983060'});
    addMaker({location:{lat: -25.435894, lng: 30.982963},content:'<h4>Old Admin</h4>-25.435894, 30.982963'});
    addMaker({location:{lat: -25.436346, lng: 30.983586},content:'<h4>Auditoriums</h4>-25.436346, 30.983586'});
    addMaker({location:{lat: -25.436300, lng: 30.985654},content:'<h4>Building 8</h4>-25.436300, 30.985654'});
    addMaker({location:{lat: -25.435572, lng: 30.982785},content:'<h4>Lecture Halls</h4>-25.435572, 30.982785'});
    addMaker({location:{lat: -25.436555, lng: 30.985241},content:'<h4>Parking</h4>-25.436555, 30.985241'});
    addMaker({location:{lat: -25.436558, lng: 30.981825},content:'<h4>Park Bay-D</h4>-25.436558, 30.981825'});
    addMaker({location:{lat: -25.434486, lng: 30.980516},content:'<h4>Swimming Pool</h4>-25.434486, 30.980516'});
    addMaker({location:{lat: -25.434429, lng: 30.980039},content:'<h4>Tennis Court</h4>-25.434429, 30.980039'});

    // ______________________________________________________________________________________  __________   ___    
    
    const directionsRenderer = new google.maps.DirectionsRenderer();
    const directionsService = new google.maps.DirectionsService();

    directionsRenderer.setMap(map);
  calculateAndDisplayRoute(directionsService, directionsRenderer);
  document.getElementById("mode").addEventListener("change", () => {
    calculateAndDisplayRoute(directionsService, directionsRenderer);
  });
}

function calculateAndDisplayRoute(directionsService, directionsRenderer) {
    const selectedMode = document.getElementById("mode").value;
  
    directionsService
      .route({
        origin: document.getElementById("from").value,
        destination: document.getElementById("to").value,
        travelMode: google.maps.TravelMode[selectedMode],

        
      })
      .then((response) => {
        directionsRenderer.setDirections(response);
      })
      .catch((e) => window.alert("Directions request failed due to " + status));
  }

// ---------------------------------------About Us-----------------------------------------------------------------

const swiper = new Swiper('.image-section', {

    autoplay:{
            delay: 3000,
            disableOnInteraction: false,
    },
    // Optional parameters
    // direction: 'vertical',
    loop: true,

    pagination: {
        el: '.swiper-pagination',
        clickacble:true,
      },
    
  });

//   -------------------------------------------Almanac-----------------------------------------------------

