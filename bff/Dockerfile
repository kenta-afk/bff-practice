FROM node:20-slim

WORKDIR /app

COPY package*.json ./

RUN npm install

COPY . .

RUN npm run build

RUN ls -la && \
    ls -la dist || echo "No dist directory"

EXPOSE 3000

CMD ["npm", "run", "dev"]