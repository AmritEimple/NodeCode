// document.getElementById('userForm').addEventListener('submit', async (e) => {
//     e.preventDefault();
//     const id = document.getElementById('id').value;
//     const name = document.getElementById('name').value;

//     console.log('Form submitted with:', { id, name }); // Add debug log

//     if (!id || !name) {
//         alert('Both ID and Name are required!');
//         return;
//     }

//     try {
//         await fetch('/api/users', {
//             method: 'POST',
//             headers: { 'Content-Type': 'application/json' },
//             body: JSON.stringify({ id, name }),
//         });

//         if (!response.ok) {
//             throw new Error(`HTTP error! Status: ${response.status}`);
//         }
        
//         alert('User added successfully!');
//         document.getElementById('id').value = '';
//         document.getElementById('name').value = '';
//         fetchUsers();
//     } catch (err) {
//         console.error('Error submitting form:', error);
//         alert('Error adding user: ' + err.message);
//     }
// });

// async function fetchUsers() {
//     try {
//         const response = await fetch('/api/users');
//         const users = await response.json();
//         const userList = document.getElementById('userList');
//         userList.innerHTML = '';
//         users.forEach((user) => {
//             const li = document.createElement('li');
//             li.textContent = `${user.id}: ${user.name}`;
//             userList.appendChild(li);
//         });
//     } catch (err) {
//         alert('Error fetching users: ' + err.message);
//     }
// }

// // Fetch users on page load
// fetchUsers();
