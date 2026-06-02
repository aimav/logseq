# NVM
curl -o- https://raw.githubusercontent.com/nvm-sh/nvm/v0.40.4/install.sh | bash
source ~/.bashrc

# Claude:
sudo apt install openjdk-21-jdk
curl -O https://download.clojure.org/install/linux-install-1.11.1.1435.sh
chmod +x linux-install-1.11.1.1435.sh && sudo ./linux-install-1.11.1.1435.sh
echo "Installing clojure, type 'exit' when downloading done"
clojure
# EOF