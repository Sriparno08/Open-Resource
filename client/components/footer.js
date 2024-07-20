const footer = document.createElement("footer");

footer.innerHTML = `<div class="contain">
                      <div class="row">
                        <div class="col">
                          <img src="https://raw.githubusercontent.com/Sriparno08/Openpedia/main/client/assets/long-logo.png" alt="Openpedia">
                        </div>

                        <div class="col">
                          <h3 id="Support" style="font-size: 15px;">Support</h3>
                          <p><a href="https://github.com/Sriparno08/Openpedia" class="footer-links">Documentation</a></p>
                          <p><a href="#about" class="footer-links">About</a></p>
                          <p style="font-size: 14px; margin-top: 0.5rem;">
                            <a href="./pages/frequently-asked-questions/index.html" class="hover-link">Frequently Asked Questions</a>
                          </p>
                        </div>

                        <div class="col">
                          <h3 id="Solutions" style="font-size: 15px;">Categories</h3>
                          <p><a href="./pages/introduction-to-open-source/index.html" class="footer-links">Introduction to Open Source</a></p>
                          <p><a href="./pages/learn-git-and-github/index.html" class="footer-links">Learn Git & GitHub</a></p>
                          <p><a href="./pages/contributing-to-open-source/index.html" class="footer-links">Contributing to Open Source</a></p>
                          <p><a href="./pages/beginner-friendly-repos/index.html" class="footer-links">Beginner-Friendly Repos</a></p>
                          <p><a href="./pages/open-source-programs/index.html" class="footer-links">Open Source Programs</a></p>
                        </div>
                      </div>

                      <div class="end">
                        <span class="copyright">&copy; 2024 Openpedia</span>
                        <span class="creator">Developed By Sriparno Roy & Open Source Community</span>
                        <span class="social media" id="socialicons">
                          <i><a href="https://www.linkedin.com/in/sriparnoroy" class="fa-brands fa-linkedin-in"></a></i>
                          <i><a href="https://github.com/Sriparno08" class="fa-brands fa-github"></a></i>
                        </span>
                      </div>
                    </div>`;

container.append(footer);
