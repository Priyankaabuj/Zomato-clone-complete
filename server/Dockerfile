FROM  node:alpine

WORKDIR /app
COPY ./package.json ./
RUN npm install
COPY . ./

ENV MONGO_URL="mongodb+srv://Priyanka:Priyanka0244@cluster0.bf8rmws.mongodb.net/?retryWrites=true&w=majority"
ENV JWTSECRET=ZomatoApp
ENV AWS_S3_ACCESS_KEY=AKIAUDJIPE4VG6UWGLER
ENV AWS_S3_SECRET_KEY=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
ENV GOOGLE_CLIENT_ID=384261144468-kak7jrobfvkbi1kt3hba0adfkuhb39lf.apps.googleusercontent.com
ENV GOOGLE_CLIENT_SECRET=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

RUN npm run build

CMD [ "npm", "run", "start" ]