function selectReward(pledgeAmount) {
    const amountRaisedElement = document.getElementById('amount-raised');
    const totalBackersElement = document.getElementById('total-backers');
    const progressBarElement = document.querySelector('.progress-bar');

    let amountRaised = parseFloat(amountRaisedElement.textContent.replace(/[$,]/g, ''));
    let totalBackers = parseInt(totalBackersElement.textContent.replace(/[,]/g, ''));
  
    // Update the raised amount and total backers
    amountRaised += pledgeAmount;
    totalBackers += 1;

    amountRaisedElement.textContent = `$${amountRaised.toLocaleString()}`;
    totalBackersElement.textContent = `${totalBackers.toLocaleString()}`;

    // Update progress bar width based on new amount
    const fundingGoal = 100000; // Assuming a funding goal of $100,000
    const progressPercentage = (amountRaised / fundingGoal) * 100;
    progressBarElement.style.width = `${progressPercentage}%`;

    // Update pledge left count
    const pledgeLeftElement = document.querySelector(`[data-pledge-amount="${pledgeAmount}"]`);
    let pledgesLeft = parseInt(pledgeLeftElement.textContent) - 1;
    pledgeLeftElement.textContent = `${pledgesLeft} left`;

    // Disable the button if no pledges left
    if (pledgesLeft <= 0) {
        const button = pledgeLeftElement.nextElementSibling;
        button.textContent = 'Out of stock';
        button.disabled = true;
    }
}