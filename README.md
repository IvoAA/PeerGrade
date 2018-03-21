
### Backend

1. Create isolated Python environments:

   ```
   virtualenv venv
   ```

2. Enter this environment:

   - Linux:
   ```
   source venv/bin/activate
   ```
   - Windows:
   ```
   cd venv
   ./Scripts/activate
   cd ..
   ```


3. Install python packages:

   ```
   pip install -r pip-requires.txt
   ```

4. Start backend:

   ```
   python run.py
   ```

### Frontend

1. Go to frontend folder:

  ```
  cd chat/
  ```

2. Install packages:

  ```
  npm install
  ```

3. Start frontend:

  ```
  npm run start
  ```

4. Open [http://localhost:3000/](http://localhost:3000/)


## License

MIT License
