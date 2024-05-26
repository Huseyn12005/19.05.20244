document.getElementById('registerForm').addEventListener('submit', async function (event) {
    event.preventDefault();

    const formData = {
        firstname: document.getElementById('firstname').value,
        lastname: document.getElementById('lastname').value,
        email: document.getElementById('email').value,
        password: document.getElementById('password').value
    };

    try {
        const response = await fetch('http://localhost:4000/auth/register', {
            method: 'POST',
            headers: {
                'Content-Type': 'application/json'
            },
            body: JSON.stringify(formData)
        });

        const result = await response.json();
        
        if (response.ok) {
            document.getElementById('alert').innerHTML = `<p style="color: green;">Success: ${result.message}</p>`;
        } else {
            document.getElementById('alert').innerHTML = `<p style="color: red;">Error: ${result.message}</p>`;
        }
    } catch (error) {
        document.getElementById('alert').innerHTML = `<p style="color: red;">Error: ${error.message}</p>`;
    }
});