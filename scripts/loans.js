function calcularCuotas() {
      const valor = parseFloat(document.getElementById("numero").value);

      if (isNaN(valor) || valor <= 0) {
        alert("Por favor, ingresa un número válido mayor a cero.");
        return;
      }

      const unaCuotaTotal = valor * 1.4;
      const dosCuotasTotal = valor * 1.6;
      const tresCuotasTotal = valor * 1.9;

      const tabla = `
        <tr>
          <td>1 cuota</td>
          <td>$${unaCuotaTotal.toFixed(2)}</td>
          <td>$${unaCuotaTotal.toFixed(2)}</td>
        </tr>
        <tr>
          <td>2 cuotas</td>
          <td>$${dosCuotasTotal.toFixed(2)}</td>
          <td>$${(dosCuotasTotal / 2).toFixed(2)}</td>
        </tr>
        <tr>
          <td>3 cuotas</td>
          <td>$${tresCuotasTotal.toFixed(2)}</td>
          <td>$${(tresCuotasTotal / 3).toFixed(2)}</td>
        </tr>
      `;

      document.getElementById("tablaResultado").innerHTML = tabla;
    }