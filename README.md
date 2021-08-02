## Applogic

## [Mobility Area]

gcloud auth configure-docker asia-east2-docker.pkg.dev

docker build -t asia-east2-docker.pkg.dev/mobility-320606/app-repo/node-photo-dev:latest .

docker push asia-east2-docker.pkg.dev/mobility-320606/app-repo/node-photo-dev:latest
