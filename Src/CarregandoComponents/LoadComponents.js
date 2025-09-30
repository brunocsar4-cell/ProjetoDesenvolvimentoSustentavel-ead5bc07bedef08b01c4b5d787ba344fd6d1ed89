async function loadComponents() {
  const components = [
    { id: 'navbar', file: 'navbar.html' },
    { id: 'header', file: 'header.html' },
    { id: 'carrossel', file: 'carrossel.html' },
    { id: 'areas', file: 'areas.html' },
    { id: 'dicas', file: 'dicas.html' },
    { id: 'footer', file: 'footer.html' }
  ];

  for (const { id, file } of components) {
    try {
      const response = await fetch(`components/${file}`);
      if (!response.ok) throw new Error(`Erro ao carregar ${file}`);
      const content = await response.text();
      document.getElementById(id).innerHTML = content;
    } catch (error) {
      console.error(error);
      document.getElementById(id).innerHTMLHTML = `<p>Erro ao carregar o componente ${file}</p>`;
    }
  }
}


loadComponents();