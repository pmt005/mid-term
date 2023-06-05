-- Messages table seeds here

INSERT INTO messages (message, sent_time, sender_id, receiver_id, item_id)
VALUES
('Hey! I saw your listing for the used item on the website. Is there any chance you could lower the price from $200 to $150?', CURRENT_TIMESTAMP, 2, 1, 1),
('Hi there! Thanks for your interest in it. I understand you''re looking for a better deal. While $150 is a bit lower than I had in mind, I could meet you halfway and lower it to $175. What do you think?', CURRENT_TIMESTAMP + INTERVAL '3 minutes', 1, 2, 1),
('I appreciate the offer, but $175 is still a bit steep for me. How about we settle on $160? It would really help me out.', CURRENT_TIMESTAMP + INTERVAL '6 minutes', 2, 1, 1),
('I understand where you''re coming from. Let''s make a deal at $165. It''s a fair compromise between your offer and my asking price. What do you say?', CURRENT_TIMESTAMP + INTERVAL '7 minutes', 1, 2, 1),
('I really need to stick to my budget, so I can''t go higher than $160. Can we meet there?', CURRENT_TIMESTAMP + INTERVAL '9 minutes', 2, 1, 1),
('Alright, I''ll do $160 for you. It''s a bit lower than I initially wanted, but I want to make the sale. Deal?', CURRENT_TIMESTAMP + INTERVAL '10 minutes', 1, 2, 1),
('Deal! Thanks for working with me. Could we arrange a time and place for the exchange?', CURRENT_TIMESTAMP + INTERVAL '13 minutes', 2, 1, 1),
('Absolutely! Let''s coordinate the details via private message. I''ll provide you with my contact information, and we can arrange a convenient meeting. Looking forward to completing the transaction!', CURRENT_TIMESTAMP + INTERVAL '14 minutes', 1, 2, 1);
