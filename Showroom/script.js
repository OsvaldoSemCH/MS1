document.addEventListener
(
    "DOMContentLoaded",
    ()=>
    {
        fetch("../Dados/loja.json")
        .then((response) => response.json())
        .then((data) =>
        {
            const Container = document.getElementById("ShowroomContainer");
            data.map((produto, index) =>
            {
                const card = document.createElement("div");
                card.className = "card";
                card.style.width = "18rem";
                card.style.marginRight = "10px";
                card.style.padding = "5px";
                card.style.float = "left";

                const imagem = document.createElement("img");
                imagem.src = produto.imagem;
                imagem.style.width = "100%";
                imagem.style.aspectRatio = 1;
                imagem.style.objectFit = "contain";

                const cardBody = document.createElement("div");

                const cardTitle = document.createElement("h3");
                cardTitle.textContent = produto.descricao;

                const cardText = document.createElement("p");
                cardText.textContent = "Preço: $" + produto.preco.toFixed(2);

                const cardText2 = document.createElement("p");
                cardText2.textContent = "Quantidade: " + produto.quantidade;

                const circulo = document.createElement("div");
                if(produto.status)
                {
                    circulo.style.backgroundColor = "#c00000";
                }else
                {
                    circulo.style.backgroundColor = "#00c000";
                }
                circulo.style.width = "30px";
                circulo.style.height = "30px";
                circulo.style.margin = "3px";
                circulo.style.borderRadius = "50%";

                cardBody.appendChild(cardTitle);
                cardBody.appendChild(cardText);
                cardBody.appendChild(cardText2);
                
                card.appendChild(circulo);
                card.appendChild(imagem);
                card.appendChild(cardBody);
        
                Container.appendChild(card);
            })
        })
    }
)