const botaoMostrarProjetos = document.querySelector('.btn-mostrar-projetos');
const projetosInativos = document.querySelectorAll('.projeto:not(.ativo)');

botaoMostrarProjetos.addEventListener('click', () =>{
projetosInativos.forEach(projetosInativos => {
projetosInativos.classList.add('ativo');
 });

botaoMostrarProjetos.classList.add("remover");
});