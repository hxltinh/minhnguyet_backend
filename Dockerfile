# Use Node.js
FROM node:22

#Set the working directory
WORKDIR /usr/src/app

# Copy package.json and package-lock.json
COPY package*.json ./

# Set environment variables
ENV NODE_ENV=production
ENV PORT=4000
ENV DB_URL=mongodb+srv://hxltinh:123456aAzZ@cluster0.byxmskt.mongodb.net/?retryWrites=true&w=majority&appName=Cluster0

# Install dependencies
RUN npm ci

# Copy the rest of the application code
COPY . .

# Build the application
RUN npm run build

# Install PM2 globally
RUN npm install -g pm2

#Run the application using PM2
CMD ["pm2-runtime", "start", "dist/main.js", "--name", "minhnguyet_backend"]



