import { Logo } from "../../images/Logo";
import { DiscordIcon } from "../../images/icons/DiscordIcon";
import { GitHubIcon } from "../../images/icons/GitHubIcon";
import { LinkedInIcon } from "../../images/icons/LinkedInIcon";
import { TelegramIcons } from "../../images/icons/TelegramIcons";
import "./footer.scss";
export const Footer = () => {
	return (
		<footer className="footer">
			<div className="footer-info">
				<div className="footer-title">
					<Logo />
				</div>
				<div className="footer-contacts">
					<div className="contact-info">
						<span>Contact me:</span>
						<br />
						<span>zdybeldenys@gmail.com</span>
						<br />
					</div>
					<div className="footer-social-media">
						<GitHubIcon />
						<TelegramIcons />
						<LinkedInIcon />
						<DiscordIcon />
					</div>
				</div>
			</div>
			<div className="footer-copyright">
				© Cpyright 2023. Made by <span>Denys Zdybel</span>
			</div>
		</footer>
	);
};
