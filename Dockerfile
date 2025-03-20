# Menggunakan Node.js sebagai base image
FROM node:20

# Set working directory dalam container
WORKDIR /app

# Copy package.json dan package-lock.json ke dalam container
COPY package.json package-lock.json ./

# Install dependencies
RUN npm install

# Copy seluruh proyek ke dalam container
COPY . .

# Expose port yang digunakan oleh Vite (biasanya 5173)
EXPOSE 5173

# Jalankan aplikasi dalam mode development
CMD ["npm", "run", "dev", "--", "--host"]
