const button = document.getElementById("save-btn");


  const pdf = document.getElementById("template");
  console.log(pdf);

    button.addEventListener("click", function() {
      button.style.display = "none";
      // window.print();
        const opt = {
            margin: 1,
            filename: 'myResume.pdf',
            image: { type: 'jpeg', quality: 0.98 },
            html2canvas: { scale: 2 },
            jsPDF: { unit: 'in', format: 'letter', orientation: 'portrait' }
        };
        html2pdf().from(pdf).set(opt).save();

        setTimeout(function() {
          button.style.display = "inline-block";
        }, 3000)
        
    });

