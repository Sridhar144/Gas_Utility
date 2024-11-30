**Full-Stack Django Application**

A comprehensive **full-stack Django application** built with **Django REST Framework (DRF)** for the backend and **React.js** for the frontend, featuring user authentication, role-based access control (RBAC), and integration with external services such as APIs and databases.

**Features**

- **Secure Authentication**: User signup, login, and JWT-based authentication.
- **Role-Based Access Control (RBAC)**: Custom roles with associated permissions to secure application routes.
- **Responsive Frontend**: Modern, user-friendly design built with **React.js**.
- **Database Integration**: PostgreSQL for persistent storage with ORM integration in Django.
- **Admin Interface**: Intuitive interface to manage users, roles, and permissions.
- **RESTful API**: Exposed for interaction with the frontend and third-party services.
- **JWT Security**: Ensures secure and token-based user sessions.![gas-utility-frontend][public][1_lAMsvtB6afHwTQYCNM1xvw.png]

**Setup Instructions**

**Backend Setup**

**Install Dependencies**: bash

Copy code

pip install django djangorestframework djangorestframework-simplejwt psycopg2-binary

1\.

**Configure .env**:

Create a .env file in your project root and add the following configuration (replace values with

your own): env

Copy code

SECRET\_KEY=your\_secret\_key DEBUG=True DATABASE\_NAME=your\_db

DATABASE\_USER=your\_user DATABASE\_PASSWORD=your\_password DATABASE\_HOST=127.0.0.1 DATABASE\_PORT=5432

2\.

**Run Migrations**: bash

Copy code

python manage.py migrate

3\.

**Start the Backend Server**: bash

Copy code

python manage.py runserver

4\.![ref1]

**Frontend Setup**

**Install Dependencies**:

Navigate to the frontend folder and run: bash

Copy code

npm install

1\.

**Start the Frontend Server**: bash

Copy code

npm start

2\.![ref1]

**Tech Stack**

- **Frontend**: React.js, CSS
- **Backend**: Django, Django REST Framework (DRF), PostgreSQL, Simple JWT
- **Database**: PostgreSQL
- **Authentication**: JWT (JSON Web Tokens)
- **Admin Panel**: Django Admin![ref1]

**Folder Structure Overview**

bash Copy code project/

│

├── backend/

│ ├── core/

│ │ ├── migrations/

│ │ ├── models.py

│ │ ├── views.py

│ │ ├── admin.py

│ │ └── urls.py

│ ├── users/

│ │ ├── migrations/

│ │ ├── models.py

│ │ ├── views.py

│ │ ├── serializers.py │ │ └── urls.py

│ ├── manage.py

│ └── settings.py

│

├── frontend/

│ ├── public/

│ ├── src/

│ │ ├── components/ │ │ ├── pages/

│ │ ├── App.js

│ │ └── index.js

│ └── package.json

│

├── .env

├── README. md

└── requirements.txt

- **backend/**: Contains all Django backend files (models, views, serializers, migrations).
- **frontend/**: Contains the React.js frontend with UI components and pages.
- **.env**: Stores environment variables for configuration.
- **requirements.txt**: Contains Python package dependencies for the backend.![ref1]

**Contact**

**Sridhar Sundar** 📧sridharsundar100@gmail.com 📞+91 9372635328![ref1]

**Enjoy coding!** 🚀

[ref1]: Aspose.Words.71d94140-7889-4188-be61-3ebf609f228f.001.png
