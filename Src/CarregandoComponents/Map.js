document.addEventListener("DOMContentLoaded", function() {
  // Inicializa o mapa centralizado em Recife
  const map = L.map('map').setView([-8.0476, -34.8770], 13);

  // Adiciona o mapa base do OpenStreetMap
  L.tileLayer('https://{s}.tile.openstreetmap.org/{z}/{x}/{y}.png', {
    attribution: '&copy; <a href="https://www.openstreetmap.org/">OpenStreetMap</a> colaboradores'
  }).addTo(map);

  // Exemplo de pontos de hospitais e postos de saúde
  const locais = [
    { nome: "Hospital da Restauração", lat: -8.0565, lon: -34.9029 },
    { nome: "UPA Boa Viagem", lat: -8.1277, lon: -34.9033 },
    { nome: "Hospital das Clínicas UFPE", lat: -8.0472, lon: -34.9513 },
    { nome: "Posto de Saúde Ibura", lat: -8.1321, lon: -34.9280 }
  ];

  // Adiciona marcadores no mapa
  locais.forEach(local => {
    L.marker([local.lat, local.lon])
      .addTo(map)
      .bindPopup(`<b>${local.nome}</b><br>Unidade de saúde próxima.`);
  });

  // Tenta pegar localização do usuário
  map.locate({ setView: true, maxZoom: 15 });

  function onLocationFound(e) {
    const radius = e.accuracy / 2;
    L.marker(e.latlng).addTo(map)
      .bindPopup("Você está aqui!").openPopup();
    L.circle(e.latlng, radius).addTo(map);
  }

  map.on('locationfound', onLocationFound);
});