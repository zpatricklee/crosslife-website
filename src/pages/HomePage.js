import React, { useRef, useState, useEffect } from "react";
import "bootstrap/dist/css/bootstrap.min.css";
import emailjs from "emailjs-com";
import { fetchAnnouncements } from "../utils/announcementsFirestore";
import classes from "./HomePage.module.css";

// EmailJS config (use environment variables for security)
const SERVICE_ID = process.env.REACT_APP_EMAILJS_SERVICE_ID;
const TEMPLATE_ID = process.env.REACT_APP_EMAILJS_TEMPLATE_ID;
const PUBLIC_KEY = process.env.REACT_APP_EMAILJS_PUBLIC_KEY;

const DEFAULT_ANNOUNCEMENTS = [
	{
		title: "Community Potluck",
		content: "Join us after service on October 6th for food and fellowship!",
	},
	{
		title: "Youth Group",
		content: "Meets Fridays at 7:00 PM in the church basement.",
	},
	{
		title: "Bible Study",
		content: "Wednesdays at 6:30 PM. All are welcome!",
	},
];

const HomePage = () => {
	// Announcements logic
	const [announcements, setAnnouncements] = useState([]);
	useEffect(() => {
		async function loadAnnouncements() {
			try {
				const data = await fetchAnnouncements();
				setAnnouncements(data.length ? data : DEFAULT_ANNOUNCEMENTS);
			} catch (err) {
				setAnnouncements(DEFAULT_ANNOUNCEMENTS);
			}
		}
		loadAnnouncements();
	}, []);

	// Connect form logic
	const formRef = useRef();
	const [status, setStatus] = useState("");
	const [loading, setLoading] = useState(false);
	const handleSubmit = (e) => {
		e.preventDefault();
		setLoading(true);
		setStatus("");
		console.log('EmailJS config:', SERVICE_ID, TEMPLATE_ID, PUBLIC_KEY);
		// Debug: log form data being sent
		const formData = new FormData(formRef.current);
		for (let [key, value] of formData.entries()) {
			console.log(`Form field: ${key} = ${value}`);
		}
		// Make sure field names match EmailJS template variables exactly
		emailjs
			.sendForm(SERVICE_ID, TEMPLATE_ID, formRef.current, PUBLIC_KEY)
			.then(
				() => {
					setStatus("Message sent successfully!");
					setLoading(false);
					formRef.current.reset();
				},
				() => {
					setStatus("Failed to send message. Please try again later.");
					setLoading(false);
				}
			);
	};

	return (
		<>
			<div style={{ scrollBehavior: "smooth" }}>
				{/* Home Section */}
				<section
					id="home"
					style={{
						background: "#000",
						color: "#fff",
						minHeight: "100svh",
						height: "100svh",
						width: "100vw",
						position: "relative",
						overflow: "hidden",
						marginTop: "-80px",
						paddingTop: "80px",
						display: "flex",
						flexDirection: "column",
						justifyContent: "center",
						alignItems: "center",
					}}
				>
					<div
						style={{
							position: "absolute",
							top: 0,
							left: 0,
							width: "100%",
							height: "100%",
							background:
								"url(https://images.unsplash.com/photo-1464983953574-0892a716854b?auto=format&fit=crop&w=1500&q=80) center/cover no-repeat",
							opacity: 0.5,
							zIndex: 1,
						}}
					></div>
					<div
						style={{
							position: "relative",
							zIndex: 2,
							width: "100%",
							maxWidth: 600,
							display: "flex",
							flexDirection: "column",
							justifyContent: "flex-start",
							alignItems: "center",
							flex: 1,
							padding: "32px 16px 0 16px",
						}}
					>
						<h1
							style={{
								color: "#fff",
								fontWeight: 700,
								fontSize: "2rem",
								textAlign: "center",
								margin: 0,
								marginBottom: 12,
								textShadow: "0 2px 16px #000",
							}}
						>
							Welcome to Crosslife Christian Fellowship
						</h1>
						<div
							className={
								classes["main-card-text"] + " text-center"
							}
							style={{
								color: "#fff",
								marginBottom: 18,
								fontSize: "1.1rem",
								fontWeight: 500,
								textShadow: "0 1px 8px #000",
							}}
						>
							Glorify Jesus. Grow Together in Jesus. Go Share About Jesus.
						</div>
						<div
							className="text-center"
							style={{
								color: "#fff",
								position: "relative",
								zIndex: 2,
								width: "100%",
								marginBottom: 10,
							}}
						>
							<strong>Sunday Worship: 11:30 AM</strong>
							<br />
							<span>1340 W Gardena Blvd, CA 90247</span>
							<div
								style={{
									width: "100%",
									maxWidth: 400,
									margin: "12px auto 0",
									borderRadius: 8,
									overflow: "hidden",
									boxShadow: "0 2px 8px rgba(0,0,0,0.5)",
									height: "180px",
								}}
							>
								<iframe
									title="Map to Crosslife Christian Fellowship"
									src="https://www.google.com/maps?q=1340+W+Gardena+Blvd,+Gardena,+CA+90247&output=embed"
									width="100%"
									height="180"
									style={{ border: 0 }}
									allowFullScreen=""
									loading="lazy"
									referrerPolicy="no-referrer-when-downgrade"
								></iframe>
							</div>
							<a
								href="https://www.google.com/maps/search/?api=1&query=1340+W+Gardena+Blvd,+Gardena,+CA+90247"
								target="_blank"
								rel="noopener noreferrer"
								style={{
									display: "block",
									color: "#bb86fc",
									textDecoration: "underline",
									fontSize: 14,
									marginTop: 4,
								}}
							>
								View on Google Maps
							</a>
						</div>
					</div>
				</section>

				{/* About Section */}
				<section
					id="about"
					style={{
						background: "#1e1e1e",
						color: "#fff",
						minHeight: "60vh",
						width: "100vw",
						padding: "60px 0",
					}}
				>
					<div style={{ maxWidth: 600, margin: "0 auto" }}>
						<h1
							className="text-center mb-4"
							style={{ color: "#bb86fc" }}
						>
							About Us
						</h1>
						<div
							className="card p-4 shadow-sm border-0 mx-auto w-100"
							style={{
								background: "#232323",
								color: "#fff",
								maxWidth: "100%",
							}}
						>
							<h2 className="mb-3 text-center"></h2>
							<p className="lead text-center">
								Crosslife Christian Fellowship is the adult,
								English-speaking, congregation of Gardena
								Presbyterian Church (PCA). As a diverse
								community of believers, Crosslife's purpose is
								to reflect the differences that become united
								in Christ, by reaching out with the gospel to
								the South Bay.
							</p>
							<h2 className="mb-3 mt-4 text-center">
								Our Mission Statement
							</h2>
							<p className="text-center">
								Glorify Jesus. Grow Together in
								Jesus. Go Share About Jesus.
							</p>
						</div>
					</div>
				</section>

				{/* Announcements Section */}
				<section
					id="announcements"
					style={{
						background: "#232323",
						color: "#fff",
						minHeight: "60vh",
						width: "100vw",
						padding: "32px 0",
					}}
				>
					<div style={{ maxWidth: 600, margin: "0 auto" }}>
						<h1
							className="text-center mb-3"
							style={{ color: "#03dac6", fontSize: "1.7rem" }}
						>
							Announcements
						</h1>
						<ul className="list-group w-100">
							{announcements.map((a, idx) => (
								<li
									className="list-group-item mb-2 px-3 py-3"
									key={idx}
									style={{
										background: "#1e1e1e",
										color: "#fff",
										borderRadius: 8,
										fontSize: "1rem",
										boxShadow: "0 1px 4px rgba(0,0,0,0.12)",
										width: "100%",
										maxWidth: "100%",
									}}
								>
									<strong style={{ fontSize: "1.1rem" }}>{a.title}</strong>
									<div style={{ marginTop: 4 }}>{a.content}</div>
								</li>
							))}
						</ul>
					</div>
				</section>

				{/* Give Section */}
				<section
					id="give"
					style={{
						background: "#1e1e1e",
						color: "#fff",
						minHeight: "40vh",
						width: "100vw",
						padding: "60px 0",
					}}
				>
					<div style={{ maxWidth: 600, margin: "0 auto" }}>
						<div className="container">
							<div className="row justify-content-center">
								<div className="col-12 col-md-8 col-lg-6 text-center">
									<h1 className="mb-4" style={{ color: "#bb86fc" }}>
										Give
									</h1>
									<p className="lead mb-4">
										Support the mission and ministry of Crosslife
										Christian Fellowship. Your generosity makes a
										difference!
									</p>
									{/* Tithe.ly Give Button */}
									<a
										href="https://give.tithe.ly/?formId=7960d13b-6864-11ee-90fc-1260ab546d11"
										target="_blank"
										rel="noopener noreferrer"
									>
										<button
											className="btn btn-success btn-lg"
											style={{
												background: "#00DB72",
												fontWeight: "bold",
												fontSize: 19,
												padding: "15px 70px",
												borderRadius: 4,
												color: "white",
												border: "none",
												textShadow: "none",
											}}
										>
											Give via tithe.ly
										</button>
									</a>
									<div
										className="mt-3"
										style={{
											fontSize: "0.95rem",
											color: "#bbb",
										}}
									>
										Thank you for your faithful giving!
									</div>
								</div>
							</div>
						</div>
					</div>
				</section>

				{/* Connect + Footer Section (combined 100vh) */}
				<div style={{ height: '100vh', minHeight: '100svh', width: '100vw', display: 'flex', flexDirection: 'column', background: '#232323' }}>
					<section
						id="connect"
						style={{
							background: "#232323",
							color: "#fff",
							height: 'calc(75vh - 220px)',
							width: '100vw',
							padding: "60px 0 80px 0",
							boxSizing: "border-box",
							display: "flex",
							alignItems: "center",
							justifyContent: "center",
						}}
					>
						<div style={{ maxWidth: 600, width: '100%', margin: '32px auto 0 auto', background: '#232323', borderRadius: 12, boxShadow: '0 2px 12px rgba(0,0,0,0.12)', padding: '32px 16px' }}>
							<h1 className="text-center mb-4" style={{ color: "#03dac6" }}>Connect</h1>
							<form
								ref={formRef}
								className="mb-4 connect-white-form w-100 mx-auto"
								onSubmit={handleSubmit}
							>
								<div className="mb-3">
									<label
										htmlFor="name"
										className="form-label"
										style={{ color: "#fff" }}
									>
										Name
									</label>
									<input
										type="text"
										className="form-control"
										id="name"
										name="name"
										placeholder="Your Name"
										required
									/>
								</div>
								<div className="mb-3">
									<label
										htmlFor="email"
										className="form-label"
										style={{ color: "#fff" }}
									>
										Email
									</label>
									<input
										type="email"
										className="form-control"
										id="email"
										name="email"
										placeholder="you@example.com"
										required
									/>
								</div>
								<div className="mb-3">
									<label
										htmlFor="message"
										className="form-label"
										style={{ color: "#fff" }}
									>
										Message
									</label>
									<textarea
										className="form-control"
										id="message"
										name="message"
										rows="3"
										placeholder="Let us know how we can help or if you'd like to join our mailing list or if you'd like to get plugged in!"
										required
									></textarea>
								</div>
								<button
									type="submit"
									className="btn btn-primary w-100"
									disabled={loading}
									style={{
										background: "#bb86fc",
										border: "none",
										color: "#121212",
									}}
								>
									{loading ? "Sending..." : "Send"}
								</button>
							</form>
							{status && (
								<div
									className={`alert ${status.includes("successfully") ? "alert-success" : "alert-danger"}`}
									style={{ background: '#333', color: '#fff', border: 'none' }}
								>
									{status}
								</div>
							)}
						</div>
					</section>
					<footer
						style={{
							background: "#181818",
							color: "#fff",
							height: '220px',
							width: '100vw',
							display: "flex",
							flexDirection: "column",
							boxSizing: "border-box",
							textAlign: "center",
							alignItems: "center",
							padding: 0,
						}}
					>
						<div style={{ width: '100%', display: 'flex', flexDirection: 'column', justifyContent: 'flex-start', alignItems: 'center', paddingTop: '16px', boxSizing: 'border-box', maxWidth: 600, margin: '0 auto' }}>
							<div style={{ marginBottom: 8 }}>
								<a
									href="mailto:crosslifechristianfellowship@gmail.com"
									style={{
										color: "#bb86fc",
										textDecoration: "underline",
										fontWeight: 500,
										fontSize: "1.1rem",
									}}
								>
									crosslifechristianfellowship@gmail.com
								</a>
							</div>
							<div
								style={{
									display: "flex",
									justifyContent: "center",
									gap: "32px",
									fontSize: "2rem",
									marginBottom: 4,
								}}
							>
								<a
									href="https://www.instagram.com/crosslifechristianfellowship?igsh=MTc4MmM1YmI2Ng=="
									target="_blank"
									rel="noopener noreferrer"
									title="Instagram"
									style={{ color: "#E1306C" }}
								>
									<i className="bi bi-instagram"></i>
								</a>
								<a
									href="https://www.youtube.com/@crosslifefellowship7644"
									target="_blank"
									rel="noopener noreferrer"
									title="YouTube"
									style={{ color: "#FF0000" }}
								>
									<i className="bi bi-youtube"></i>
								</a>
								<a
									href="https://facebook.com"
									target="_blank"
									rel="noopener noreferrer"
									title="Facebook"
									style={{ color: "#1877F3" }}
								>
									<i className="bi bi-facebook"></i>
								</a>
								<a
									href="https://open.spotify.com/show/4kThl6swDryOK9aY1jOCov?si=tiQq66QqQcSqjppCuWAq1Q"
									target="_blank"
									rel="noopener noreferrer"
									title="Spotify"
									style={{ color: "#1DB954" }}
								>
									<i className="bi bi-spotify"></i>
								</a>
							</div>
							<div
								style={{
									fontSize: "0.95rem",
									color: "#bbb",
									marginTop: 4,
								}}
							>
								&copy; {new Date().getFullYear()} Crosslife Christian Fellowship
							</div>
						</div>
						<div style={{ flexGrow: 1 }}></div> {/* Spacer for bottom empty space */}
					</footer>
					<div style={{ flexGrow: 1, background: '#181818', width: '100vw' }}></div> {/* Extra footer space to fill up to 100vh */}
				</div>
			</div>
		</>
	);
};

export default HomePage;
