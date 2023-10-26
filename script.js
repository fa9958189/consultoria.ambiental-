 
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





                const photoContainer = document.querySelector('.photo-container');
            const popup = document.getElementById('myPopup');
            const closePopup = document.getElementById('closePopup');

            photoContainer.addEventListener('click', () => {
                popup.style.display = 'block';
            });

            closePopup.addEventListener('click', () => {
                popup.style.display = 'none';
            });

            // Feche o popup se o usuário clicar fora da imagem
            window.addEventListener('click', (event) => {
                if (event.target === popup) {
                    popup.style.display = 'none';
                }
            });
                   // Fechar o popup quando o botão de fechar for clicado
                   closePopupButton.addEventListener('click', () => {
                    closeImagePopup();
                });



            // // Adicionar eventos de clique às imagens
            //     imagePopups.forEach(image => {
            //         image.addEventListener('click', () => {
            //             const title = image.getAttribute('data-title');
            //             const description = image.getAttribute('data-description');
            //             openImagePopup(title, description);
            //         });
            //     });

            //     // Abrir o popup quando o botão for clicado
            //     openPopupButton.addEventListener('click', () => {
            //         popup.style.display = 'block';
            //     });

            //     // Fechar o popup quando o botão de fechar for clicado
            //     closePopupButton.addEventListener('click', () => {
            //         closeImagePopup();
            //     });

            //     // Fechar o popup quando o usuário clicar fora dele
            //     window.addEventListener('click', (event) => {
            //         if (event.target === popup) {
            //             closeImagePopup();
            //         }
            //     });
