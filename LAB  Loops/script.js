// Array global de contatos
let contatos = [
    {
        nome: "Maxwell Wright",
        telefone: "(0191) 719 6495",
        email: "Curabitur.egestas.nunc@nonummyac.co.uk"
    },
    {
        nome: "Raja Villarreal",
        telefone: "0866 398 2895",
        email: "posuere.vulputate@sed.com"
    },
    {
        nome: "Helen Richards",
        telefone: "0800 1111",
        email: "libero@convallis.edu"
    }
];

// Função para exibir o primeiro contato
function exibirPrimeiro() {
    const displayArea = document.getElementById("displayArea");
    
    if (contatos.length > 0) {
        let c = contatos[0];
        displayArea.innerHTML = `
            <div class="contact-item">
                <strong>📌 ${c.nome}</strong>
                <small>
                    ☎️ ${c.telefone}<br>
                    📧 ${c.email}
                </small>
            </div>
        `;
    } else {
        displayArea.innerHTML = '<div class="empty-state">Nenhum contato disponível</div>';
    }
}

// Função para exibir o último contato
function exibirUltimo() {
    const displayArea = document.getElementById("displayArea");
    
    if (contatos.length > 0) {
        let c = contatos[contatos.length - 1];
        displayArea.innerHTML = `
            <div class="contact-item">
                <strong>📌 ${c.nome}</strong>
                <small>
                    ☎️ ${c.telefone}<br>
                    📧 ${c.email}
                </small>
            </div>
        `;
    } else {
        displayArea.innerHTML = '<div class="empty-state">Nenhum contato disponível</div>';
    }
}

// Função para exibir todos os contatos
function exibirTodos() {
    const displayArea = document.getElementById("displayArea");
    
    if (contatos.length > 0) {
        let html = "";
        // Usando loop for para iterar sobre os contatos
        for (let c of contatos) {
            html += `
                <div class="contact-item">
                    <strong>👤 ${c.nome}</strong>
                    <small>
                        ☎️ ${c.telefone}<br>
                        📧 ${c.email}
                    </small>
                </div>
            `;
        }
        displayArea.innerHTML = html;
    } else {
        displayArea.innerHTML = '<div class="empty-state">Nenhum contato disponível</div>';
    }
}

// Função para adicionar novo contato
function adicionarContato() {
    const nome = document.getElementById("nome").value.trim();
    const telefone = document.getElementById("telefone").value.trim();
    const email = document.getElementById("email").value.trim();
    const statusMsg = document.getElementById("statusMessage");

    if (!nome || !telefone || !email) {
        statusMsg.innerHTML = '<div class="status-message" style="background: rgba(255, 67, 54, 0.1); border-color: rgba(255, 67, 54, 0.3); color: #ff6b6b;">⚠️ Preencha todos os campos!</div>';
        return;
    }

    // Adicionar contato ao array
    contatos.push({ nome, telefone, email });

    // Limpar campos
    document.getElementById("nome").value = "";
    document.getElementById("telefone").value = "";
    document.getElementById("email").value = "";

    // Mostrar mensagem de sucesso
    statusMsg.innerHTML = '<div class="status-message">✅ Contato adicionado com sucesso!</div>';
    setTimeout(() => {
        statusMsg.innerHTML = "";
    }, 3000);

    // Atualizar contador
    atualizarContador();
}

// Função para atualizar o contador de contatos
function atualizarContador() {
    document.getElementById("contador").textContent = contatos.length;
}

// Inicializar o contador ao carregar a página
document.addEventListener("DOMContentLoaded", atualizarContador);