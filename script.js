document.getElementById('healthForm').addEventListener('submit', async (event) => {
    event.preventDefault(); // Prevent form refresh
    
    const name = document.getElementById('name').value;
    const age = document.getElementById('age').value;
    const healthMetric = document.getElementById('healthMetric').value;

    const response = await fetch('http://localhost:3000/submit', {
        method: 'POST',
        headers: { 'Content-Type': 'application/json' },
        body: JSON.stringify({ name, age, healthMetric })
    });

    const result = await response.json();
    alert(`Server Response: ${result.message}`);
});