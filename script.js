        const photoContainer = document.querySelector('.photo-container');
        const popup = document.getElementById('myPopup');
        const closePopup = document.getElementById('closePopup');
        const closeButton = document.getElementById('closeButton');

        photoContainer.addEventListener('click', () => {
            popup.style.display = 'block';
        });

        closePopup.addEventListener('click', () => {
            // Evite fechar o popup quando clicar em closePopup (X)
            event.stopPropagation();
        });

        closeButton.addEventListener('click', () => {
            popup.style.display = 'none';
        });

        // Feche o popup se o usuário clicar fora da imagem
        window.addEventListener('click', (event) => {
            if (event.target === popup) {
                popup.style.display = 'none';
            }
        });



       function toggleSidebar() {
        var sidebar = document.querySelector('.sidebar');
        sidebar.classList.toggle('open-menu');
    }
        function enviarMensagemWhatsApp() {
            // Número de telefone no formato internacional (no exemplo, +55 63 9203-6652)
            var numeroTelefone = '556392036652';

            // Mensagem opcional
            var mensagem = 'Olá, estou entrando em contato pelo site.';

            // Montar o link do WhatsApp
            var linkWhatsApp = 'https://api.whatsapp.com/send?phone=' + numeroTelefone;

            // Adicionar a mensagem se desejar
            if (mensagem) {
                linkWhatsApp += '&text=' + encodeURIComponent(mensagem);
            }

            // Redirecionar o usuário para o link do WhatsApp
            window.location.href = linkWhatsApp;
    }
        function abrirPerfilInstagram() {
            // Nome de usuário do Instagram (no exemplo, "ambientalanjos")
            var usuarioInstagram = 'ambientalanjos';

            // Montar o link do Instagram
            var linkInstagram = 'https://www.instagram.com/' + usuarioInstagram;

            // Redirecionar o usuário para o link do Instagram
            window.location.href = linkInstagram;
    }

