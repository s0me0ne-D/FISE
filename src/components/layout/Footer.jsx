import { Logo } from "../../images/Logo";
import { DiscordIcon } from "../../images/icons/DiscordIcon";
import { GitHubIcon } from "../../images/icons/GitHubIcon";
import { LinkedInIcon } from "../../images/icons/LinkedInIcon";
import { TelegramIcons } from "../../images/icons/TelegramIcons";
import "./footer.scss";
import TMDBLogo from "../../images/TMDB_logo.svg";
import { Mail } from "../../images/icons/Mail";
export const Footer = () => {
	return (
		<footer className="footer">
			<div className="footer-info">
				<div className="footer-title">
					<Logo />
				</div>
				<div className="footer-contacts">
					<div className="footer-social-media">
						<Mail />
						<GitHubIcon />
						<TelegramIcons />
						<LinkedInIcon />
						<DiscordIcon />
					</div>
					<div className="footer-tmdb">
						<img src={TMDBLogo} alt="tmdb" className="footer-tmdb-logo" />
					</div>
				</div>
			</div>
			<div className="footer-copyright">
				© Cpyright 2023. Made by <span>Denys Zdybel</span>
			</div>
		</footer>
	);
};
