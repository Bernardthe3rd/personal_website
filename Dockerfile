# Gebruik officiële Node image
FROM node:18

# Maak een werkmap in de container
WORKDIR /app

# Kopieer alleen package.json & package-lock.json voor snellere cache
COPY package*.json ./

# Installeer dependencies
RUN npm install

# Kopieer de rest van je project
COPY . .

# Expose de Vite dev server poort
EXPOSE 3000

# Start de Vite dev server
CMD ["npm", "run", "dev", "--", "--host"]
# De --host zorgt ervoor dat Vite bereikbaar is buiten de container (dus op je browser).