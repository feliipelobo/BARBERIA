
const API_URL = "https://barber-api-hpbx.onrender.com/api/public/data";

async function getData() {
  try {
    const response = await fetch(API_URL);
    if (!response.ok) {
      throw new Error(`Não foi possível carregar os dados do site`);
    }

    const json = await response.json();
    render(json);

  } catch (error) {
    console.error(error.message);
  }
}


function render(data) {
  const plans = []
  const plansArea = document.querySelector('#plans-content-area');

  data.plans.map(planItem => {
    console.log(planItem);
    const plan = buildPlan(planItem);
    plans.push(plan);
  }).join('');

  plansArea.innerHTML = plans.toString()

}

function buildPlan(plan) {
  return `<div class="col">
      <div class="card pricing-card h-100">
          <div class="card-header pricing-header basic-header p-4">
              <h3 class="card-title text-center mb-0">${plan.name}</h3>
          </div>
          <div class="card-body p-4">
              <h2 class="card-title text-center mb-4"> <small class="text-muted">R$</small>
                  ${plan.price}<small class="text-muted">/mês*</small>
              </h2>
              <ul class="feature-list text-center mb-4">
                  <li>${plan.description}</li>
              </ul>
              <div class="text-center">
                  <a onclick="sendToWhatsApp('554791058869', 'Olá mundo!')"
                      class="btn btn-success btn-custom">Enviar Plano</a>
              </div>
          </div>
      </div>
  </div>`
}

getData();
