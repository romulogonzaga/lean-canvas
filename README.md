# Lean Canvas
Este projeto é uma ferramenta educacional desenvolvida para auxiliar alunos na unidade curricular de "Projeto de Inovação: Modelagem de projetos – Design Thinking e Canvas" . Ele permite a criação de um modelo de negócio enxuto (Lean Canvas) diretamente no navegador, com uma identidade visual moderna e funcionalidade de exportação de imagem.

## 🛠️ Tecnologias Utilizadas
* **HTML5:** Estrutura semântica dos blocos de negócio.
* **CSS3 (Grid & Flexbox):** Layout responsivo fixo (zero scroll) com estética baseada em tecnologia.
* **JavaScript (Vanilla):** Lógica de manipulação do DOM e ajuste de campos.
* **html2canvas:** Biblioteca externa para conversão do dashboard em imagem PNG.

## ✨ Funcionalidades
- **Interface Single Page:** Todo o Canvas visível em uma única tela, sem necessidade de rolagem.
- **Identificação Destacada:** Campos claros para Nome e Grupo com foco em usabilidade.
- **Auto-Ajuste:** Textareas que se adaptam ao conteúdo (mantendo a visibilidade no print).
- **Exportação Inteligente:** Botão que gera um print automático da área de trabalho, preservando quebras de linha e formatação.

## 🚀 Como usar
1. Clone o repositório ou baixe os arquivos `index.html`, `style.css` e `script.js`.
2. Certifique-se de que os três arquivos estão na mesma pasta.
3. Abra o `index.html` em qualquer navegador moderno.
4. Preencha os campos de identificação e os 9 blocos do Canvas.
5. Clique em **"EXPORTAR CANVAS (PNG)"** para baixar sua atividade pronta para entrega.

## 📌 Contexto Educacional
Esta ferramenta faz parte da metodologia de integração entre **Estratégia de Empresa** e **Educação para Inovação**, facilitando a transição da ideia de negócio para a estruturação do TCC (Trabalho de Conclusão de Curso).


## Estrutura

- `index.html`: identificação do aluno e os nove blocos do Canvas.
- `style.css`: estilos e organização visual.
- `script.js`: exportação em PNG com html2canvas.

A biblioteca html2canvas é carregada por CDN; a exportação requer acesso à internet para carregar essa dependência. Exporte o resultado antes de fechar ou recarregar a página: os campos não têm salvamento automático.

## Ferramentas relacionadas

- [Mapa de Empatia](https://github.com/romulogonzaga/mapa-empatia): organize descobertas sobre o usuário.
- [Project Model Canvas](https://github.com/romulogonzaga/project-model-canvas): estruture a execução do projeto.
