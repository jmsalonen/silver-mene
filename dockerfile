FROM node:slim

# Install npm packages for client and build the client
WORKDIR /app/client
COPY client/package.json .
RUN npm install
COPY client .
RUN npm run build

# Install npm packages for backend
WORKDIR /app/backend
COPY backend/package.json .
RUN npm install
COPY backend .

EXPOSE 3000

CMD ["npm", "run", "prod"]